const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cloudinary = require('cloudinary').v2;

const connectToDB = require('./db/conn.js');
const authRoutes = require('./routes/authRoutes.js');
const placeRoutes = require('./routes/placeRoutes.js');
const bookingRoutes = require('./routes/bookingRoutes.js');

dotenv.config();
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const app = express();
const PORT = process.env.PORT;

const app = express();

app.use(express.json({limit:'5mb'}));
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/places', placeRoutes);
app.use('/api/bookings', bookingRoutes);

if (process.env.NODE_ENV !== "developement") {
    app.use(express.static(path.join(__dirname, "/client/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
    });
}

app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
    connectToDB();
})