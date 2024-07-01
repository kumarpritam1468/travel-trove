const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    imgUrl:{
        type:String,
        default:'https://www.usnews.com/object/image/00000162-f3bb-d0d5-a57f-fbfb3eef0000/32-lake-louise.jpg?update-time=1677094961403&size=responsive640'
    },
    budget:{
        type:String,
        required:true
    },
    rating:{
        type:String,
        required:true
    },
    likedBy: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            default: []
        }
    ],
    bookedBy: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            default: []
        }
    ],
})

const Place = mongoose.model('Place', placeSchema);

module.exports = Place;