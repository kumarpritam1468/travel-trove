const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

const connectToDB = require('./db/conn.js');
const authRoutes = require('./routes/authRoutes.js');
const placeRoutes = require('./routes/placeRoutes.js');

dotenv.config();
const PORT = process.env.PORT;

const app = express();

app.use(express.json({limit:'5mb'}));
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/places', placeRoutes);

app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
    connectToDB();
})