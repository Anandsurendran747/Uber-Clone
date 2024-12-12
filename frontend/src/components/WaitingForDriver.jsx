import React from 'react'

const WaitingForDriver = () => {
    return (
        <div>
            <div className="flex flex-col   bg-gray-100">
                <div className="bg-white p-4 rounded-lg shadow-lg">
                    <div className="relative">
                        <img
                            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646918/assets/e9/2eeb8f-3764-4e26-8b17-5905a75e7e85/original/2.png"
                            alt="Vehicle"
                            className="w-24 h-24 object-cover rounded-full"
                        />
                        <img
                            src="https://imgs.search.brave.com/XPHHyQBtUm3pEyFS5C3Gv1aECkpeuysQz2VpgLUAOYU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzI2LzYxLzEz/LzM2MF9GXzEyNjYx/MTMzN19tOGtjUnRT/NUc3QWhyRnBPUTBX/dWZ4NFBnTDZKNHl4/Zy5qcGc"
                            alt="Driver"
                            className="w-24 h-24 rounded-full absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 border-4 border-white"
                        />
                    </div>
                    <div className="mt-4 text-center">
                        <h2 className="text-xl font-semibold">Driver Name</h2>
                        <p className="text-gray-600">Vehicle: Vehicle Model</p>
                        <p className="text-gray-600">License Plate: ABC123</p>
                    </div>
                    <div className="mt-4 text-center">
                        <p className="text-gray-600">Driver's Location: 123 Main St</p>
                        <p className="text-gray-600">Estimated Delay: 5 minutes</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WaitingForDriver