
import React from 'react'

const Riding = () => {
    return (
        <div className='w-screen  h-screen relative overflow-hidden'>
            <img className='absolute w-14 top-5 left-5' src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n" alt="" />
            <div className='w-screen h-screen'>
                <img className='w-full h-full object-cover' src="https://imgs.search.brave.com/zP_AcfQVDRJoftJJh0BqOtIa5lKArDZtWkkPW_Ys6tc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9saDMu/Z29vZ2xldXNlcmNv/bnRlbnQuY29tL1hr/MnhpbWhlQmgySk1Q/d0FrcUVsbmZ1a25U/LVkyX01BN0NNZ01V/ekxfOVhMYXBheHNl/V1pvQVFvaHozcDBG/UXduSWxZNFdDSm9C/LUZNV1VhaE5wVHpN/TFBmRzJPZkN1cmUy/NHBHV0FDPXc2Mzg" alt="" />

            </div>
            <div className='h-screen flex flex-col justify-end  absolute top-0 w-full'>
                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                    <div className="relative flex justify-center">
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
                    <div className="mt-4 ">
                        <h2 className="text-xl font-semibold">Driver Name</h2>
                        <p className="text-gray-600">License Plate: ABC123</p>
                    </div>
                    <div className="mt-4">
                        <p><strong><i className='ri-currency-line'></i> </strong>₹196</p>
                    </div>
                    <div className="mt-4 text-center">
                        <button className="bg-green-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600">
                            Make Payment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Riding