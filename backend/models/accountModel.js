const pool = require("../config/db");
const bcrypt = require("bcrypt");
const {QUERY} = require("./querydb");

const VALID_ROLES = ["Admin", "Staff", "Customer"];

const getAll = async () => {
  const query = "SELECT * FROM accounts";
  const [rows] = await pool.execute(query);
  return rows;
};

const getById = async (accountid) => {
  const query = "SELECT * FROM accounts WHERE ACCOUNTID = ?";
  const [rows] = await pool.execute(query, [accountid]);
  return rows.length > 0 ? rows[0] : null;
};

const getByUsername = async (username) => {
  const query = "SELECT * FROM accounts WHERE USERNAME = ?";
  const [rows] = await pool.execute(query, [username]);
  return rows.length > 0 ? rows[0] : null; // Trả về object user hoặc null nếu không có
};

const create = async (newAccount) => {
  const { username, password, role } = newAccount;
  const newpassword = await bcrypt.hash(password, 10);
  const userRole = VALID_ROLES.includes(role) ? role : "Customer";

  const query =
    "INSERT INTO accounts (USERNAME, PASSWORDHASH, ROLE) VALUES (?,?,?)";
  const [result] = await pool.execute(query, [username, newpassword, userRole]);

  if (result.affectedRows > 0) {
    return { id: result.insertId, username, role: userRole };
  } else {
    throw new Error("Failed to create user");
  }
};

const checkAccount = async (username) => {
  const query = "SELECT * FROM accounts WHERE USERNAME = ?";
  const [rows, fields] = await pool.execute(query, [username]);
  return rows;
};

const update = async (accountid, username, passwordhash, role) => {
  if (!accountid) {
    throw new Error("Account ID is required");
  }

  // Lấy thông tin tài khoản hiện tại để giữ lại các giá trị không thay đổi
  const currentAccount = await getById(accountid);
  if (!currentAccount) {
    throw new Error("No account found with the given ID.");
  }

  // Sử dụng giá trị mới nếu có, ngược lại giữ nguyên giá trị cũ
  const updatedUsername = username || currentAccount.USERNAME;
  const updatedPassword = passwordhash || currentAccount.PASSWORDHASH;

  // Xử lý role tương tự như trong hàm create
  let updatedRole = currentAccount.ROLE;
  if (role) {
    const formattedRole =
      role.charAt(0).toUpperCase() + role.slice(1).toLowerCase();
    if (VALID_ROLES.includes(formattedRole)) {
      updatedRole = formattedRole;
    }
  }

  // Log để debug
  console.log("Updating account:", {
    id: accountid,
    username: updatedUsername,
    passwordUpdated: passwordhash ? true : false,
    role: updatedRole,
  });

  // Thực hiện truy vấn cập nhật đầy đủ các trường
  const [result] = await pool.execute(
    "UPDATE accounts SET USERNAME = ?, PASSWORDHASH = ?, ROLE = ? WHERE ACCOUNTID = ?",
    [updatedUsername, updatedPassword, updatedRole, accountid]
  );

  // Kiểm tra kết quả
  if (result.affectedRows === 0) {
    throw new Error("Update failed. No account found with the given ID.");
  }

  return result;
};


const deleteAccount = async (accountid) => {
  if (!accountid) {
    throw new Error("Account ID is required");
  }
  
  const [result] = await pool.execute(
    "DELETE FROM accounts WHERE ACCOUNTID = ?",
    [accountid]
  );
  return result;
}

const lastLogin = async (name) => {
  try {
    await pool.execute(QUERY.LASTLOGIN, [name]);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAll,
  getById,
  getByUsername,
  create,
  checkAccount,
  update,
  deleteAccount,
  lastLogin,
};
