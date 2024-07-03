const Place = require('../models/placeModel');
const User = require('../models/userModel');
const cloudinary = require('cloudinary').v2;

const getAll = async (req, res) => {
    try {
        const places = await Place.find()
            .populate({
                path: 'likedBy',
                select: '-password'
            })
            .populate({
                path: 'bookedBy',
                select: '-password'
            });

        if (places.length === 0) return res.status(200).json([]);

        res.status(200).json(places);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

const addPlace = async (req, res) => {
    try {
        const { name, budget, city, desc } = req.body;
        let { imgUrl } = req.body;

        if (imgUrl) {
            const url = await cloudinary.uploader.upload(imgUrl);
            imgUrl = url.secure_url;
        }

        const newPlace = new Place({
            name,
            imgUrl,
            budget,
            city,
            desc
        });

        const savedPlace = await newPlace.save();

        res.status(201).json(savedPlace);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to add place' });
    }

}

const deletePlace = async (req, res) => {
    try {
        const { id: placeId } = req.params;

        const place = await Place.findById(placeId);

        if (!place) return res.status(404).json({ error: "Place not found" });

        if (place.imgUrl) {
            const imgId = place.imgUrl.split('/').pop().split('.')[0];
            await cloudinary.uploader.destroy(imgId);
        }

        await Place.findByIdAndDelete(placeId);

        res.status(200).json({ message: "Place deleted" });
    } catch (error) {
        res.status(500).json(error.message);
    }
}

const likePlace = async (req, res) => {
    try {
        const { id: placeId } = req.params;
        const userId = req.user._id.toString();

        const place = await Place.findById(placeId);
        const user = await User.findById(userId);

        if (!place) return res.status(404).json({ error: "Place not found" });

        const alreadyLiked = user.likes.includes(placeId);

        if (alreadyLiked) {
            await Place.updateOne({ _id: placeId }, { $pull: { likedBy: userId } });
            await User.updateOne({ _id: userId }, { $pull: { likes: placeId } });

            const updatedLikes = place.likedBy.filter((id) => id.toString() !== userId);

            res.status(200).json(updatedLikes);
        } else {
            place.likedBy.push(userId);
            await User.updateOne({ _id: userId }, { $push: { likes: placeId } });
            await place.save();

            const updatedLikes = place.likedBy;
            res.status(200).json(updatedLikes);
        }
    } catch (error) {
        res.status(500).json(error.message);
    }
}

module.exports = { getAll, addPlace, deletePlace, likePlace };