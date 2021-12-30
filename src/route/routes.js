const express = require("express");

const reviewController = require('../controller/ReviewController');


let router = express.Router();

//Review
router.post('/uploadData', reviewController.uploadData);
router.get('/reviewCounts', reviewController.getReviewCount);
router.get('/', reviewController.getReview);
router.post('/', reviewController.postReview);

module.exports = router;