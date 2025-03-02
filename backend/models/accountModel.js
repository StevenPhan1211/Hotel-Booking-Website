const pool = require("../config/db");
const bcrypt = require("bcrypt");

const VALID_ROLES = ["Admin", "Staff", "User"];

// Chi co folder model moi thuc hien query tu csdl mysql
const getAll = async () => {
  const query = "SELECT * FROM accounts";
  const [rows] = await pool.execute(query);
  return rows;
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

module.exports = {
    getAll,
    create,
    checkAccount,
}