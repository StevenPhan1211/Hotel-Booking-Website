const express = require('express');
const router = express.Router();
const accountController = require("../controllers/AccountController");

// lay tat ca danh sach user
// GET localhost:3000/users
router.get("/", accountController.getAllAccounts);

router.post("/create", accountController.createAccount); 

module.exports = router;