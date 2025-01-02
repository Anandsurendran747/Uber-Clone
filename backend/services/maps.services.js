const axios = require('axios');
const captainModel = require('../models/captain.model');



module.exports.getAddress = async (location) => {
    // const apiKey = process.env.GOOGLE_MAP_API;
    console.log(location);

    const address = location;
    try {
        const apiKey = process.env.MAPBOX_API;
        const response = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json`, {
            params: {
                access_token: apiKey
            }
        });
        const { center } = response.data.features[0];
        const [lng, lat] = center;
        // const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json`, {
        //     params: {
        //         address: address,
        //         key: apiKey
        //     }
        // });
        // const { lat, lng } = response.data.results[0].geometry.location;
        return { lat, lng };
    } catch (error) {
        console.error('Error fetching the address:', error);
        throw error;
    }
}

const checkReachable = async (lat, lon) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${lon},${lat}.json`;
    const accessToken = process.env.MAPBOX_API;

    const response = await axios.get(url, {
        params: { access_token: accessToken },
    });

    if (response.data.features.length > 0) {
        console.log('Location is valid:', response.data.features[0].place_name);
        return true;
    } else {
        console.log('Invalid or unreachable location');
        return false;
    }
};
const haversine = (lat1, lon1, lat2, lon2) => {
    const toRad = (value) => (value * Math.PI) / 180;
    const R = 6371; // Earth's radius in kilometers
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return (R * c).toFixed(2); // Distance in kilometers
};

module.exports.calculateDistance = async (source, destination) => {
    if (!source || !destination) {
        throw new Error('Source and destination are required.');
    }
    try {
        const sourceLoc = await this.getAddress(source);
        const destiLoc = await this.getAddress(destination);
        checkReachable(destiLoc.lat, destiLoc.lng)
        const response = await axios.get(`https://api.mapbox.com/directions/v5/mapbox/driving/${sourceLoc.lng},${sourceLoc.lat};${destiLoc.lng},${destiLoc.lat}`, {
            params: {
                access_token: process.env.MAPBOX_API,
                geometries: 'geojson'
            }
        });

        if (response.data.routes.length > 0) {
            const route = response.data.routes[0];
            const distance = (route.distance / 1000).toFixed(2); // distance in kilometers
            const duration = (route.duration / 60).toFixed(2); // duration in minutes
            return { distance, duration };
        } else {
            throw new Error('No route found');
        }
    } catch (error) {
        console.error('Error calculating the distance:', error);
        throw error;
    }

}


module.exports.getSuggessions = (loc) => {
    if (!loc) {
        throw new Error('Address is required.');
    }
    const apiKey = process.env.MAPBOX_API;
    return axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(loc)}.json`, {
        params: {
            access_token: apiKey,
            autocomplete: true,
            limit: 5
        }
    })
        .then(response => {
            return response.data.features.map(feature => feature.place_name);
        })
        .catch(error => {
            console.error('Error fetching suggestions:', error);
            throw error;
        });
}


module.exports.getCaptainsInTheRadius = async (ltd, lng, radius) => {
    const captains = await captainModel.find({
        location: {
            $geoWithin: {
                $centerSphere: [[ltd, lng], radius / 6371]
            }
        }
    });
    
    return captains
}