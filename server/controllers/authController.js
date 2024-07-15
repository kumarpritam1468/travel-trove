const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const generateTokenSetCookie = require('../lib/utils/generateToken');

const signup = async (req, res) => {
    try {
        const { name, email, phone, password, cPassword } = req.body;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: "Enter valid Email" });
        }

        if (phone.length !== 10) {
            return res.status(400).json({ error: "Enter valid Phone Number" });
        }

        if (password.length < 6) {
            return res.status(400).json({ error: "Password Should be 6 characters" });
        }

        if (password !== cPassword) {
            return res.status(400).json({ error: "Password and Confirm Password should match" });
        }

        const user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ error: "User already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            name,
            email,
            phone,
            password: hashedPassword
        });

        if (newUser) {
            generateTokenSetCookie(newUser._id, res);
            await newUser.save();

            return res.status(201).json({
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                phone: newUser.phone,
                password: newUser.password,
                isAdmin: newUser.isAdmin,
                bookings: newUser.bookings,
                likes: newUser.likes
            });
        }

        res.status(400).json({ error: "Invalid User Data" })
    } catch (error) {
        res.status(500).json(error.message);
    }
}

const signin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        const isCorrect = await bcrypt.compare(password, user.password);

        if (!isCorrect) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        generateTokenSetCookie(user._id, res);

        res.status(200).json({message:"Logged In"});
    } catch (error) {
        res.status(500).json(error.message);
    }
}

const signout = async (req, res) => {
    try {
        res.cookie('jwt', '', {maxAge:0});

        res.status(200).json({message:"Logged Out"})
    } catch (error) {
        res.status(500).json(error.message);
    }
}

const getMe = async (req, res) => {
    try {
        const user = await User.findById(req.user._id)
        .select('-password')
        .populate('likes')
        .populate({
            path: 'bookings',
            populate: {
              path: 'place',
              select: 'name imgUrl'
            }
        });

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

module.exports = { signin, signout, signup, getMe };