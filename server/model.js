const mongoose = require('mongoose');

const BookSchema=new mongoose.Schema({
    

    title: {type:String},
    author: { type:String},
    genre: { type:String},    
    available: { type:String,enum: ['Available','Not Available']},
    publishYear: { type: Number},
    interests: { type: Number},
    image: { type: String},
    description: { type: String},
    rating: { type: Number},
    reviews: { type: Number},
});

BookModel = mongoose.model('BookSchema',BookSchema,'Book');
module.exports= BookModel;