const Booking = require("../models/bookingModel");
const User = require("../models/userModel");

const createBooking = async (req, res) => {
    try {
        const { from, totalDays, totalPeople, price } = req.body;
        const { id: placeId } = req.params;
        const userId = req.user._id.toString();
        
        const newBooking = new Booking({
            place: placeId,
            user: userId,
            from,
            totalDays,
            totalPeople,
            price
        });

        if (!newBooking) return res.status(400).json({ error: "Invalid data" });

        await newBooking.save();

        await User.updateOne({ _id: userId }, { $push: { bookings: newBooking._id } });

        res.status(200).json(newBooking);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

const cancelBooking = async (req, res) => {
    try {
        const { id: bookingId } = req.params;
        const userId = req.user._id.toString();

        const booking = await Booking.findById(bookingId);

        if (!booking) return res.status(404).json({ error: "Booking not found" });

        await User.updateOne({ _id: userId }, { $pull: { bookings: bookingId } });

        await Booking.findByIdAndDelete(bookingId);

        res.status(200).json({ message: "Booking Cancelled" });
    } catch (error) {
        res.status(500).json(error.message);
    }
}

const getAllBooking = async (req, res) => {
    try {
        const bookings = await Booking.find()
            .populate({
                path: 'user',
                select: 'name'
            })
            .populate({
                path: 'place',
                select: 'name'
            });

        if (!bookings) return res.status(200).json([]);

        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

module.exports = { createBooking, cancelBooking, getAllBooking };