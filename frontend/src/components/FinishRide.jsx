import React from 'react'

const FinishRide = (props) => {
    return (
        <div>
            <h4 className='text-2xl '>Finish This Ride</h4>
            <div className='flex items-center p-2 '>
                <img src="https://via.placeholder.com/150" alt="Captain" className="w-16 h-16 rounded-full mr-4" />
                <h3 className="text-lg font-semibold text-gray-800">Name</h3>
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
                    }}
                    className="bg-yellow-400 text-white px-4 py-2 rounded">Complete Ride</button>
                <button
                    onClick={() => {
                        props.setfinishPopUp(false)
                    }}
                    className="bg-gray-300 text-white px-4 py-2 rounded ">Cancel</button>
            </div>

        </div>
    )
}

export default FinishRide