const express = require('express');
const router = express.Router();
const hotelsController = require("../controllers/HotelsController");

// GET
router.get("/", hotelsController.getAllHotels);


module.exports = router;