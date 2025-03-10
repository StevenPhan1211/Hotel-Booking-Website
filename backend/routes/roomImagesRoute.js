const express = require("express");
const router = express.Router();
const RoomImageController = require("../controllers/RoomImagesController");

// CRUD Routes
router.get("/", RoomImageController.getAllImages);
router.get("/:id", RoomImageController.getImageById);
router.get("/room/:roomId", RoomImageController.getImagesByRoomId);
router.post("/create", RoomImageController.createImage);
router.put("/update/:id", RoomImageController.updateImage);
router.delete("/delete/:id", RoomImageController.deleteImage);

module.exports = router;
