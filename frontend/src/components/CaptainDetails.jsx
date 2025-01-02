import React from 'react'

const CaptainDetails = () => {
    return (
        <div className="bg-white shadow-md h-full rounded-lg p-4 w-full">
            <div className='flex justify-between items-center'>
                <h1 className="text-xl font-bold text-gray-800 mb-4">Welcome, Captain!</h1>
                <div>
                    <img src="https://via.placeholder.com/150" alt="Captain" className="w-16 h-16 rounded-full mr-4" />
                    <h3 className="text-lg font-semibold text-gray-800">Name</h3>
                    <p className="text-gray-600">Plate</p>
                </div>
            </div>
            <ul className="space-y-4"></ul>
            <ul className="space-y-4">
                <li className="flex items-center justify-between">
                    <span className="text-gray-600">Total Rides:</span>
                    <span className="font-bold text-gray-800">120</span>
                </li>
                <li className="flex items-center justify-between">
                    <span className="text-gray-600">Earnings:</span>
                    <span className="font-bold text-gray-800">$1,200</span>
                </li>
                <li className="flex items-center justify-between">
                    <span className="text-gray-600">Rating:</span>
                    <span className="font-bold text-gray-800">4.8</span>
                </li>
            </ul>
            {/* <button className="mt-6 w-full bg-yellow-400 text-white py-2 rounded-lg transition duration-300">
                Start New Ride
            </button> */}
        </div>
    )
}

export default CaptainDetails