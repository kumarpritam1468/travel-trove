const express = require('express');
const adminOnly = require('../middlewares/adminOnly');
const { getAllBooking, cancelBooking, createBooking } = require('../controllers/bookingController');
const protectRoute = require('../middlewares/protectRoute');

const router = express.Router();

router.get('/', adminOnly, getAllBooking);
router.post('/create/:id', protectRoute, createBooking);
router.delete('/cancel/:id', protectRoute, cancelBooking);

module.exports = router;