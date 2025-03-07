const express = require('express');
const router = express.Router();
const roomController = require("../controllers/RoomController");

// GET
router.get("/", roomController.getAllRooms);


module.exports = router;