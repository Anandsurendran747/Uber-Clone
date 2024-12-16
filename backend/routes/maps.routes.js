const express = require('express');
const { authUser } = require('../middlewares/auth.middleware');
const { getAddress, getDistance, getSuggessions } = require('../controllers/maps.controller');
const { query } = require('express-validator');
const router = express.Router();


router.get('/getLatLng', [
    query('address').isString().isLength({ min: 3 })
], authUser, getAddress);

router.get('/calculateDistance', [
    query('source').isString().isLength({ min: 3 }),
    query('destination').isString().isLength({ min: 3 })
], authUser, getDistance);

router.get('/getSuggessions', [
    query('loc').isString().isLength({ min: 3 })
], authUser, getSuggessions);


module.exports = router;