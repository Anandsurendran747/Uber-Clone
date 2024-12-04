const userModel = require('../models/user.model')
const { validationResult } = require('express-validator')
const userService = require('../services/user.service')


module.exports.registerUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const { fullname, email, password } = req.body;

    const hashedPassword = await userModel.hashPassword(password);

    const isthere = await userService.checkUser(email);
    console.log(isthere);

    if (isthere)
        res.status(200).json({ warning: "email already registerd" })
    else {
        const user = await userService.createUser({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password: hashedPassword
        })

        const token = user.generateAuthToken();

        res.status(201).json({ token, user })
    }


};

module.exports.loginUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const user = await userService.checkUser(email);

    if (!user) {
        return res.status(401).json({ message: "Invalid Email or Password." });
    }
    console.log(user.password);
    

    const isMatch = await user.comparePassword(password);
    console.log(isMatch);
    
    if (!isMatch) {
        return res.status(401).json({ message: "Invalid Email or Password." });
    }

    const token = user.generateAuthToken();

    res.status(200).json({ token, user });


}