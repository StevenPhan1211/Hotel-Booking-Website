const express = require("express");
const router = express.Router();
const PaymentController = require("../controllers/PaymentController");

// CRUD Routes
router.get("/", PaymentController.getAllPayments);
router.get("/:id", PaymentController.getPaymentById);
router.post("/create", PaymentController.createPayment);
router.put("/update/:id", PaymentController.updatePayment);
router.delete("/delete/:id", PaymentController.deletePayment);

module.exports = router;
