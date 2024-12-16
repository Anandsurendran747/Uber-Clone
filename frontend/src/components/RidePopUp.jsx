import React from 'react'

const RidePopUp = (props) => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-3">New Ride Available!</h2>
            <div className='flex items-center '>
                <p className="mb-4 w-3/4">Please review the details of your ride before confirming.</p>
                <div className='w-1/4'>
                    <img src="https://via.placeholder.com/150" alt="Captain" className="w-16 h-16 rounded-full mr-4" />
                    <h3 className="text-lg font-semibold text-gray-800">Name</h3>
                    <h4 className='text-sm font-sans'>2 Km Away</h4>
                </div>
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
            <div className="flex justify-between">
                <button
                    onClick={() => {
                        props.setconfirmRidePopUpPanel(true)
                    }}
                    className="bg-yellow-400 text-white px-4 py-2 rounded">Accept Ride</button>
                <button
                    onClick={() => {
                        props.setridePopUpPanel(false);
                    }}
                    className="bg-gray-300 text-white px-4 py-2 rounded ">Ignore</button>
            </div>
        </div>
    )
}

export default RidePopUp