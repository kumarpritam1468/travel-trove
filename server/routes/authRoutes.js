const express = require('express');
const { signin, signout, signup } = require('../controllers/authController');

const router = express.Router();

router.post('/signin', signin);
router.post('/signup', signup);
router.get('/signout', signout);

module.exports = router;