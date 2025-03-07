const express = require('express');
const router = express.Router();
const roomTypesController = require("../controllers/RoomTypesController");

// GET
router.get("/", roomTypesController.getAllTypes);
router.get("/:id", roomTypesController.getRoomTypeById);

// POST
router.post("/create", roomTypesController.createRoomType)

// PUT
router.put("/update/:id", roomTypesController.updateRoomType)

// DELETE
router.delete("/delete/:id", roomTypesController.deleteRoomType)


module.exports = router;