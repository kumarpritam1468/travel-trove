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
        default:''
    },
    budget:{
        type:String,
        required:true
    },
    city:{
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