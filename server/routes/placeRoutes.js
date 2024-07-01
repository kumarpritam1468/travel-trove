const express = require('express');
const protectRoute = require('../middlewares/protectRoute');
const { getAll } = require('../controllers/placeController');

const router = express.Router();

router.get('/', protectRoute, getAll);

module.exports = router;