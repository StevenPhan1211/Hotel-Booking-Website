const express = require("express");
const router = express.Router();
const ReviewController = require("../controllers/ReviewController");

// CRUD Routes
router.get("/", ReviewController.getAllReviews);
router.get("/:id", ReviewController.getReviewById);
router.post("/create", ReviewController.createReview);
router.put("/update/:id", ReviewController.updateReview);
router.delete("/delete/:id", ReviewController.deleteReview);

module.exports = router;
