const Booking = require("../models/bookingModel");

class BookingController {
  async getAllBookings(req, res) {
    try {
      const bookings = await Booking.getAll();
      res.status(200).json(bookings);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving bookings!" });
    }
  }

  async getBookingById(req, res) {
    try {
      const { id } = req.params;
      const booking = await Booking.getById(id);
      if (!booking) {
        return res.status(404).json({ message: "Booking not found!" });
      }
      res.status(200).json(booking);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving booking details!" });
    }
  }

  async createBooking(req, res) {
    try {
      const {
        CustomerID,
        RoomID,
        CheckInDate,
        CheckOutDate,
        TotalPrice,
        Status,
        NumberOfGuests,
        EstimatedArrivalTime,
        BookingCode,
      } = req.body;

      // Convert price to float
      const price = parseFloat(TotalPrice);
      if (isNaN(price) || price <= 0) {
        return res.status(400).json({ message: "Invalid total price!" });
      }

      const newBookingId = await Booking.create({
        CustomerID: parseInt(CustomerID),
        RoomID: parseInt(RoomID),
        CheckInDate,
        CheckOutDate,
        TotalPrice: price,
        Status,
        NumberOfGuests: parseInt(NumberOfGuests),
        EstimatedArrivalTime,
        BookingCode,
      });

      res.status(201).json({
        message: "Booking created successfully!",
        BookingID: newBookingId,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error creating booking!", error: error.message });
    }
  }

  async updateBooking(req, res) {
    try {
      const { id } = req.params;
      const updateData = req.body;

      if (updateData.EstimatedArrivalTime === "") {
        updateData.EstimatedArrivalTime = null;
      }

      const updated = await Booking.update(id, updateData);
      if (!updated) {
        return res.status(400).json({ message: "Failed to update booking!" });
      }

      res.status(200).json({ message: "Booking updated successfully!" });
    } catch (error) {
      console.error("Update error:", error);
      res
        .status(500)
        .json({ message: "Error updating booking!", error: error.message });
    }
  }

  async deleteBooking(req, res) {
    try {
      const { id } = req.params;

      const existingBooking = await Booking.getById(id);
      if (!existingBooking) {
        return res.status(404).json({ message: "Booking not found!" });
      }

      await Booking.remove(id);
      res.status(200).json({ message: "Booking deleted successfully!" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting booking!" });
    }
  }
}

module.exports = new BookingController();
