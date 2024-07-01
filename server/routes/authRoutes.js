const express = require('express');
const { signin, signout, signup, getMe } = require('../controllers/authController');
const protectRoute = require('../middlewares/protectRoute');

const router = express.Router();

router.get('/me', protectRoute, getMe);
router.post('/signin', signin);
router.post('/signup', signup);
router.get('/signout', signout);

module.exports = router;