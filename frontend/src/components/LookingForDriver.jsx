import React from 'react'

const LookingForDriver = (props) => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-3">Looking For a Driver</h2>
            <div className="w-full flex flex-col justify-between mb-4">
                <img className="w-34 h-24 " src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646918/assets/e9/2eeb8f-3764-4e26-8b17-5905a75e7e85/original/2.png" alt="Vehicle" />
                <div className='w-fullflex flex-col'>
                    <div className='p-2 border-b-2'>
                        <p><strong><i className='ri-map-pin-user-fill'></i></strong>{props.pickup}</p>
                    </div>
                    <div className='p-2 border-b-2'>
                        <p><strong><i className='ri-map-pin-2-fill'></i></strong>{props.destination}</p>
                    </div>
                    <div className='p-2 border-b-2'>
                        <p><strong><i className='ri-currency-line'></i> </strong>₹{props.fare}</p>
                    </div>

                </div>
            </div>
            {/* <div className="flex justify-between">
                <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-blue-600">Confirm Ride</button>
                <button className="bg-gray-300 text-white px-4 py-2 rounded hover:bg-gray-600">Cancel</button>
            </div> */}
        </div>
    )
}

export default LookingForDriver