import React from 'react'
import { Link } from 'react-router-dom';

const ConfirmRidePopUp = (props) => {
    return (
        <div className="p-4 bg-white">
            <h2 className="text-2xl font-bold mb-3">Confirm this Ride to Start.</h2>
            <div className='w-full mb-3 flex items-center justify-between'>
                <div className='flex flex-col '>
                    <img src="https://via.placeholder.com/150" alt="Captain" className="w-16 h-16 rounded-full mr-4" />
                    <h3 className="text-lg font-semibold text-gray-800">Name</h3>
                </div>
                <h4 className='text-sm font-sans'>2 Km Away</h4>
            </div>
            <div className="w-full flex flex-col justify-between mb-4">

                <div className='w-fullflex flex-col'>
                    <div className='p-2 border-b-2'>
                        <p><strong><i className='ri-map-pin-user-fill'></i></strong> 123 Main St</p>
                    </div>
                    <div className='p-2 border-b-2'>
                        <p><strong><i className='ri-map-pin-2-fill'></i></strong> 456 Elm St</p>
                    </div>
                    <div className='p-2 border-b-2'>
                        <p><strong><i className='ri-currency-line'></i> </strong>₹196</p>
                    </div>

                </div>
            </div>
            <form action="">
                <div className="flex flex-col gap-2 justify-between">
                    <label htmlFor="otp" className="text-gray-700">Enter OTP:</label>
                    <input
                        type="number"
                        id="otp"
                        name="otp"
                        maxLength="6"
                        className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        placeholder="Enter OTP"
                    />
                    <Link to={'/captain/riding'}
                        onClick={() => {
                            
                        }}
                        className="bg-yellow-400 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center justify-center">Confirm</Link>
                    <button
                        onClick={() => {
                            props.setridePopUpPanel(false);
                            props.setconfirmRidePopUpPanel(false);
                        }}
                        className="bg-gray-300 text-white px-4 py-2 rounded hover:bg-gray-600">Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default ConfirmRidePopUp