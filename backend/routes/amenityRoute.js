const express = require("express");
const router = express.Router();
const amenityController = require("../controllers/AmenityController");

router.get("/", amenityController.getAllAmenities);
router.get("/:id", amenityController.getAmenityById);
router.post("/create", amenityController.createAmenity);
router.put("/update/:id", amenityController.updateAmenity);
router.delete("/delete/:id", amenityController.deleteAmenity);

module.exports = router;
