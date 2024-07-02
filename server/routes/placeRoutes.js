const express = require('express');
const protectRoute = require('../middlewares/protectRoute');
const adminOnly = require('../middlewares/adminOnly');
const { getAll, addPlace, deletePlace } = require('../controllers/placeController');

const router = express.Router();

router.get('/', protectRoute, getAll);
router.post('/add', protectRoute, adminOnly, addPlace);
router.delete('/delete/:id', protectRoute, adminOnly, deletePlace);

module.exports = router;