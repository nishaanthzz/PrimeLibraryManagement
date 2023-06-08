const mongoose = require('mongoose');


const BookSchema=new mongoose.Schema({
    

    title: {type:String},
    author: { type:String},
    genre: { type:String},    
    available: { type:String,enum: ['Available','Not Available']},
    publishYear: { type: Number},
    synopsis: { type: String},
    ratings: {type: Array},
    image: { type: String},
    interests: { type: Number},
});

BookModel = mongoose.model('BookSchema',BookSchema,'BooksInfo');
module.exports= BookModel;