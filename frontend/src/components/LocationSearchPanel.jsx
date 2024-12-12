import React from 'react'

const LocationSearchPanel = (props) => {
  return (
    <div>
      <div
        onClick={() => {
          props.setchooseVehicleOpen(true);
          props.setexpand(false)
        }}
        className='gap-2 border-2 p-3 rounded-xl border-gray-80 active:border-black ml-4 mr-2 my-2 flex items-center justify-start'>
        <h2 className='bg-[#eee] h-6 w-12 rounded-full flex items-center justify-center'><i className='ri-map-pin-fill'></i></h2>
        <h4 className='font-medium text-sm'>College of Engineering Trivandrum,Kazhakkuttam</h4>
      </div>
      <div className='gap-2 border-2 p-3 rounded-xl border-gray-80 active:border-black ml-4 mr-2 my-2 flex items-center justify-start'>
        <h2 className='bg-[#eee] h-6 w-12 rounded-full flex items-center justify-center'><i className='ri-map-pin-fill'></i></h2>
        <h4 className='font-medium text-sm'>College of Engineering Trivandrum,Kazhakkuttam</h4>
      </div>
      <div className='gap-2 border-2 p-3 rounded-xl border-gray-80 active:border-black ml-4 mr-2 my-2 flex items-center justify-start'>
        <h2 className='bg-[#eee] h-6 w-12 rounded-full flex items-center justify-center'><i className='ri-map-pin-fill'></i></h2>
        <h4 className='font-medium text-sm'>College of Engineering Trivandrum,Kazhakkuttam</h4>
      </div>
      <div className='gap-2 border-2 p-3 rounded-xl border-gray-80 active:border-black ml-4 mr-2 my-2 flex items-center justify-start'>
        <h2 className='bg-[#eee] h-6 w-12 rounded-full flex items-center justify-center'><i className='ri-map-pin-fill'></i></h2>
        <h4 className='font-medium text-sm'>College of Engineering Trivandrum,Kazhakkuttam</h4>
      </div>

    </div>
  )
}

export default LocationSearchPanel