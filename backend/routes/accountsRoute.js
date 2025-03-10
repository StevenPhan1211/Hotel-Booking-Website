const express = require("express");
const router = express.Router();
const accountController = require("../controllers/AccountController");

// lay tat ca danh sach user
// GET localhost:3000/users
router.get("/", accountController.getAllAccounts);
router.get("/login", (req, res) => {
  res.render("login");
});

// POST: /create và /login
router.post("/create", accountController.createAccount);
router.post("/auth/login", accountController.login);

//PUT
router.put("/update/:id", accountController.updateAccount);

// DELETE
router.delete("/delete/:id", accountController.deleteAccounts);

module.exports = router;
