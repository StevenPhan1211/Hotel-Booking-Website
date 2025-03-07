const express = require('express');
const router = express.Router();
const roomTypesController = require("../controllers/RoomTypesController");

// GET
router.get("/", roomTypesController.getAllTypes);


module.exports = router;