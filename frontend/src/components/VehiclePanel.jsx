import React from 'react'

const VehiclePanel = ({setvehicleType, fare, setconfirmRidePanel, setchooseVehicleOpen }) => {
    return (
        <div>
            <h5 onClick={() => {
                props.setchooseVehicleOpen(false)
            }} className='p-2 text-center top-0 '><i className='text-3xl ri-arrow-down-wide-line'></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
            <div onClick={() => {
                setconfirmRidePanel(true);
                setchooseVehicleOpen(false);
                setvehicleType('car')
            }} className='flex border-2 active:border-black mb-2 rounded-xl w-full p-2 items-center '>
                <img className='h-10 w-20' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646918/assets/e9/2eeb8f-3764-4e26-8b17-5905a75e7e85/original/2.png" alt="" />
                <div>
                    <h4 className='font-medium text-base'>UberGo<span><i className='ri-user-3-fill'>4</i></span></h4>
                    <h5 className='font-medium text-sm'>2 mins away</h5>
                    <p className='font-normal text-xs text-gray-400'>Affordable,comfortable ride</p>
                </div>
                <h2 className='text-lg font-semibold'>₹{fare.car}</h2>
            </div>
            <div onClick={() => {
                setconfirmRidePanel(true);
                setchooseVehicleOpen(false);
                setvehicleType('moto')
            }} className='flex border-2 active:border-black mb-2 rounded-xl w-full p-2 items-center  '>
                <img className='h-10 w-20' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
                <div>
                    <h4 className='font-medium text-base'>Moto<span><i className='ri-user-3-fill'>1</i></span></h4>
                    <h5 className='font-medium text-sm'>3 mins away</h5>
                    <p className='font-normal text-xs text-gray-400'>Affordable,comfortable ride</p>
                </div>
                <h2 className='text-lg font-semibold'>₹{fare.moto}</h2>
            </div>

            <div onClick={() => {
                setconfirmRidePanel(true);
                setchooseVehicleOpen(false);
                setvehicleType('auto')
            }} className='flex border-2 active:border-black  mb-2 rounded-xl w-full p-2 items-center '>
                <img className='h-10 w-20' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
                <div>
                    <h4 className='font-medium text-base'>Auto <span><i className='ri-user-3-fill'>3</i></span></h4>
                    <h5 className='font-medium text-sm'>5 mins away</h5>
                    <p className='font-normal text-xs text-gray-400'>Affordable,Autorikshaw ride</p>
                </div>
                <h2 className='text-lg font-semibold'>₹{fare.auto}</h2>
            </div>
        </div>
    )
}

export default VehiclePanel