const express = require('express');
const router = express.Router();
const hotelsController = require("../controllers/HotelsController");

// GET
router.get("/", hotelsController.getAllHotels);
router.get("/:id", hotelsController.getHotelById);

// POST
router.post("/create", hotelsController.createHotel)

// PUT
router.put("/update/:id", hotelsController.updateHotel)

// DELETE
router.delete("/delete/:id", hotelsController.deleteHotel)


module.exports = router;