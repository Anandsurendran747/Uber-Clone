import React from 'react'

const LocationSearchPanel = ({ setpickupPoint, setdestinationPoint, acitveFeild, pickupSuggessions, setchooseVehicleOpen, setexpand }) => {
  function handleClikcEvent(elem) {
    if (acitveFeild == 'pickup') {
      setpickupPoint(elem)
    } else if (acitveFeild == 'desti') {
      setdestinationPoint(elem)
    }
    // setchooseVehicleOpen(true);
    // setexpand(false)
  }
  return (
    <div>
      {
        pickupSuggessions.map((elem, id) => {
          return <div key={id}
            onClick={() => {
              handleClikcEvent(elem);

            }}
            className='gap-2 border-2 p-3 rounded-xl border-gray-80 active:border-black ml-4 mr-2 my-2 flex items-center justify-start'>
            <h2 className='bg-[#eee] h-6 w-2/10 rounded-full flex items-center justify-center p-1'><i className='ri-map-pin-fill'></i></h2>
            <h4 className=' w-8/10 font-medium text-sm'>{elem}</h4>
          </div>
        })


      }






    </div>
  )
}

export default LocationSearchPanel