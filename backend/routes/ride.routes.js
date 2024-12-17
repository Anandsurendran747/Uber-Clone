const express = require('express');
const { createRide, getFare } = require('../controllers/ride.controller');
const { body,query } = require('express-validator');
const { authUser } = require('../middlewares/auth.middleware');
const router = express.Router();




router.post('/create',authUser, [
    body('source').isString().isLength({ min: 3 }).withMessage('Invalid source'),
    body('destination').isString().isLength({ min: 3 }).withMessage('Invalid destination'),
    body('vehicleType').isString().isIn(['auto', 'car', 'moto']).withMessage('Invalid vehicle type')
], createRide);

router.get('/get-fare', authUser, [
    query('source').isString().isLength({ min: 3 }).withMessage('Invalid source'),
    query('destination').isString().isLength({ min: 3 }).withMessage('Invalid destination')
], getFare);



module.exports = router;