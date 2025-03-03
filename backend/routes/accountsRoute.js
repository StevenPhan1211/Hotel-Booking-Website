const express = require('express');
const router = express.Router();
const accountController = require("../controllers/AccountController");

// lay tat ca danh sach user
// GET localhost:3000/users
router.get("/", accountController.getAllAccounts);

// POST 
router.post("/create", accountController.createAccount);

//PUT
router.put("/update", accountController.updateAccount);

// DELETE
router.delete("/delete/:id", accountController.deleteAccounts);

module.exports = router;