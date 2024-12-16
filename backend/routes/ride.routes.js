const express = require('express');
const { createRide } = require('../controllers/ride.controller');
const { body } = require('express-validator');
const { authUser } = require('../middlewares/auth.middleware');
const router = express.Router();




router.post('/create', [
    body('source').isString().isLength({min:3}).withMessage('Invalid source'),
    body('destination').isString().isLength({min:3}).withMessage('Invalid destination'),
    body('vehicleType').isString().isIn(['auto','car','moto']).withMessage('Invalid vehicle type')
],authUser, createRide);



module.exports = router;