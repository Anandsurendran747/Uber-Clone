const captainModel = require('../models/captain.model')
const { validationResult } = require('express-validator')
const captianService = require('../services/captain.service');
const blacklistedTokenModel = require('../models/blacklistedToken.model');

module.exports.registerCaptain = async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { fullname, email, password, vehicle } = req.body;

    const isCaptainWithEmail = await captianService.checkCaptain(email);

    if (isCaptainWithEmail) {
        return res.status(400).json({ message: "Email already registerd" })
    }

    const hashPassword = await captainModel.hashPassword(password);

    const captain = await captianService.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType

    })
    const token = captain.generateAuthToken();

    res.status(201).json({ token, captain });
}

module.exports.loginCaptain = async(req,res,next)=>{
    const error = validationResult(req);

    if(!error.isEmpty()){
        return res.status(400).json({errors:error.array()});
    }

    const {email,password} = req.body;

    const captain = await captianService.checkCaptain(email);

    if(!captain){
        return res.status(401).json({message:"Invalid email or password"});
    }

    isMatch = await captain.comparePassword(password);

    if(!isMatch){
        return res.status(401).json({message:"Invalid email or password"});
    }

    const token = captain.generateAuthToken();

    res.cookie('token',token);

    res.status(200).json({token,captain})

    

}

module.exports.getCaptainProfile = async (req,res,next)=>{
    res.status(200).json(req.captain);
}


module.exports.logoutCaptain = async(req,res,next)=>{
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    res.clearCookie('token');

    await blacklistedTokenModel.create({token});

    res.status(200).json({message:"logout succesfully"})

}