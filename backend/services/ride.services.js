const rideModel = require('../models/ride.model');
const { calculateDistance } = require('./maps.services');
const crypto = require('crypto');


function getOTP(num){
    const otp = crypto.randomInt(Math.pow(10, num - 1), Math.pow(10, num)).toString();
    return otp;
}


async function getFare(source, destination) {
    if (!source || !destination) {
        throw new Error('Pickup and destination are required');
    }

    const distanceTime = await calculateDistance(source, destination);

    const baseFare = {
        auto: 20,
        car: 50,
        moto: 15
    };

    const perKmRate = {
        auto: 10,
        car: 20,
        moto: 8
    };

    const perMinuteRate = {
        auto: 1,
        car: 2,
        moto: 0.5
    };

    const fare = {
        auto: Math.round(baseFare.auto + (perKmRate.auto * distanceTime.distance) + (perMinuteRate.auto * distanceTime.duration)),
        car: Math.round(baseFare.car + (perKmRate.car * distanceTime.distance) + (perMinuteRate.car * distanceTime.duration)),
        moto: Math.round(baseFare.moto + (perKmRate.moto * distanceTime.distance) + (perMinuteRate.moto * distanceTime.duration))
    };

    return fare;
}

module.exports.getFare = getFare


module.exports.createRide = async ({
    user, source, destination, vehicleType
}) => {
    if (!user || !source || !destination || !vehicleType) {
        throw new Error('All Feilds are required');
    }

    const fare = await getFare(source, destination);
console.log(fare);

    const ride = await rideModel.create({
        user,
        pickup: source,
        destination,
        otp : getOTP(6),
        fare: fare[vehicleType]
    })
 
    return ride;

}