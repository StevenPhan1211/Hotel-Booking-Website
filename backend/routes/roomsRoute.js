const express = require('express');
const router = express.Router();
const roomController = require("../controllers/RoomController");

// GET
router.get("/", roomController.getAllRooms);
router.get("/:id", roomController.getRoomById);

// POST
router.post("/create", roomController.createRoom)

// PUT
router.put("/update", roomController.updateRoom)

// DELETE
router.delete("/delete/:id", roomController.deleteRoom)

module.exports = router;