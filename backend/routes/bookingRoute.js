const express = require("express");
const router = express.Router();
const BookingController = require("../controllers/BookingController");

router.get("/", BookingController.getAllBookings);
router.get("/:id", BookingController.getBookingById);
router.post("/create", BookingController.createBooking);
router.put("/update/:id", BookingController.updateBooking);
router.delete("/delete/:id", BookingController.deleteBooking);

module.exports = router;
