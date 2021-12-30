const fs = require("fs");
const path = require('path');

const Review = require("../models/review");
const utilsMethod = require("../utils/utils");

module.exports = {

    uploadData: (req, res, next) => {
        let relPath = '../../alexa.json'
        fs.readFile(path.join(__dirname, relPath) , async (err, data) => {
            if (err) throw Error(err);
            let reqBody = JSON.parse(data.toString());
            const result = await Review.insertMany(reqBody);
            res.status(200).send(result);
        })
    },
    getReview: async function (req, res) {
        let isQueryValide =  utilsMethod.checkParamPresent(['review_source', 'rating', 'reviewed_date'] , Object.keys(req.query));
        if(!isQueryValide) throw 'please send valide query';
        const result = await Review.find(req.query);
        if (result === null) throw 'Review not found';
        res.status(200).send(result);
    },
    getReviewCount: async function (req, res) {
        const result = await Review.aggregate([
            {
                "$group": {
                    _id: "$rating",
                    count: { $sum: 1 }
                }
            }
        ]);
        if (result === null) throw 'Could not get review count';
        res.status(200).send(result);
    },
    postReview: async function (req, res) {
        const ReviewData = new Review(req.body);
        const result = await ReviewData.save();
        if (result === null) throw 'Could not add Review';
        res.status(200).send(result);
    }
}
