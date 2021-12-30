const mongoose = require('mongoose');
const { Schema } = mongoose;

const alexaSchema = new Schema({
    review: {
        type: String,
        required: true
    },
    author: {
        type: String,
    },
    review_source: {
        type: String,
        required: true,
        enum : ['iTunes','GooglePlayStore'],

    },
    rating: {
        type: Number,
        required: true
    },
    title: {
        type: String,

    },
    product_name: {
        type: String,
        required: true
    },
    reviewed_date: {
        type: Date,
        required: true
    }
}
);

const review = mongoose.model('review', alexaSchema);

module.exports = review;