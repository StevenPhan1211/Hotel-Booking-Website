const Account = require("../models/accountModel");
const bcrypt = require("bcrypt");

class AccountController {
  async getAllAccounts(req, res) {
    try {
      const users = await Account.getAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  //controller nhan thong tin tu request
  async createAccount(req, res) {
    const newAccount = req.body;
    try {
      //check user
      const checkUser = await Account.checkAccount(newAccount.username);
      if (checkUser.length > 0) {
        return res.status(400).json({ message: "User already exist" });
      }
      const user = await Account.create(newAccount);
      res.status(200).json("User created successfully!");
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateAccount(req, res) {
    try {
      const { accountid, password } = req.body;

      // 1. Kiểm tra dữ liệu đầu vào
      if (!accountid || !password) {
        return res
          .status(400)
          .json({ message: "Account ID and password are required." });
      }

      // 2. Cập nhật mật khẩu
      const result = await Account.update(accountid, password);

      // 3. Kiểm tra kết quả cập nhật
      if (result.affectedRows > 0) {
        return res
          .status(200)
          .json({ message: "Password updated successfully!" });
      } else {
        return res
          .status(404)
          .json({ message: "Account not found or no changes made." });
      }
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  }

  async deleteAccounts(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ message: "Account ID is required." });
      }

      const result = await Account.deleteAccount(id);

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Account not found" });
      }
      res.json({ message: "Account deleted successfully!" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new AccountController();
