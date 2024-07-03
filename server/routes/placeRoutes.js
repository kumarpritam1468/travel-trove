const express = require('express');
const protectRoute = require('../middlewares/protectRoute');
const adminOnly = require('../middlewares/adminOnly');
const { getAll, addPlace, deletePlace, likePlace } = require('../controllers/placeController');

const router = express.Router();

router.get('/', protectRoute, getAll);
router.post('/add', adminOnly, addPlace);
router.post('/like/:id', protectRoute, likePlace);
router.delete('/delete/:id', adminOnly, deletePlace);

module.exports = router;