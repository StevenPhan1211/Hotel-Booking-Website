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
}

module.exports = new AccountController();
