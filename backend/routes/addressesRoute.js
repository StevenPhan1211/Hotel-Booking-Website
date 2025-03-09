const express = require('express');
const router = express.Router();
const addressesController = require("../controllers/AddressesController");

// GET
router.get("/", addressesController.getAllAddresses);
router.get("/:id", addressesController.getAddressById);

// POST
router.post("/create", addressesController.createAddress);

// PUT
router.put("/update/:id", addressesController.updateAddress);

// DELETE
router.delete("/delete/:id", addressesController.deleteAddress);


module.exports = router;