const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const captainController = require('../controllers/captain.controller')

router.post('/register', [
    body('email').isEmail().withMessage('Enter a valid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('fullname.firstname').notEmpty().withMessage('First name is required').isLength({ min: 2 }).withMessage('First name must be at least 2 characters long'),
    body('vehicle.color').notEmpty().withMessage('Vehicle color is required').isLength({ min: 2 }).withMessage('Vehicle color must be at least 2 characters long'),
    body('vehicle.plate').notEmpty().withMessage('License plate is required').isLength({ min: 2 }).withMessage('License plate must be at least 2 characters long'),
    body('vehicle.capacity').isInt({ min: 1 }).withMessage('Vehicle capacity must be at least 1'),
    body('vehicle.vehicleType').notEmpty().withMessage('Vehicle type is required').isLength({ min: 2 }).withMessage('Vehicle type must be at least 2 characters long')
],
captainController.registerCaptain
);




module.exports = router;