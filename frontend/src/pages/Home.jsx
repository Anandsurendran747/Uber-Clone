import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';

const Home = () => {
    const [pickupPoint, setpickupPoint] = useState('');
    const [destinationPoint, setdestinationPoint] = useState('');
    const panelRef = useRef(null);
    const closeRef = useRef(null);
    const chooseVehicleRef = useRef(null);
    const [expand, setexpand] = useState(false);

    const [chooseVehicleOpen, setchooseVehicleOpen] = useState(false);

    useGSAP(function () {
        if (expand) {
            gsap.to(panelRef.current, {
                height: '70%'
            })
            gsap.to(closeRef.current, {
                opacity: 1
            })
        } else {
            gsap.to(panelRef.current, {
                height: '0%'
            })
            gsap.to(closeRef.current, {
                opacity: 0
            })
        }
    }, [expand]);

    useGSAP(function () {
        if (chooseVehicleOpen) {
            gsap.to(chooseVehicleRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(chooseVehicleRef.current, {
                transform: 'translateY(100%)'
            })
        }
    },[chooseVehicleOpen]);

    function submitHandler(e) {
        e.preventDefault();
    }

    return (
        <div className='w-screen  h-screen relative overflow-hidden'>
            <img className='absolute w-14 top-5 left-5' src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n" alt="" />
            <div className='w-screen h-screen'>
                <img className='w-full h-full object-cover' src="https://imgs.search.brave.com/zP_AcfQVDRJoftJJh0BqOtIa5lKArDZtWkkPW_Ys6tc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9saDMu/Z29vZ2xldXNlcmNv/bnRlbnQuY29tL1hr/MnhpbWhlQmgySk1Q/d0FrcUVsbmZ1a25U/LVkyX01BN0NNZ01V/ekxfOVhMYXBheHNl/V1pvQVFvaHozcDBG/UXduSWxZNFdDSm9C/LUZNV1VhaE5wVHpN/TFBmRzJPZkN1cmUy/NHBHV0FDPXc2Mzg" alt="" />

            </div>
            <div className='h-screen flex flex-col justify-end  absolute top-0 w-full'>
                <div className=' p-5 bg-white '>
                    <h5 ref={closeRef}
                        onClick={() => setexpand(false)}
                        className='absolute right-5 opacity-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 15.632l8.968-4.748l-.936-1.768L12 13.368L3.968 9.116l-.936 1.768z" /></svg>
                    </h5>
                    <h4 className='text-2xl font-semibold'>Find a Trip</h4>
                    <form
                        onSubmit={(e) => submitHandler(e)}
                        className='relative' action="">
                        <div className='line absolute h-16 w-1 top-2 left-2 bg-gray-700 rounded-full'></div>
                        <input
                            onChange={(e) => setpickupPoint(e.target.value)}
                            onClick={() => { setexpand(true) }}
                            placeholder='Pickup Point' className='bg-[#eeeeee] p-2 pl-4 rounded w-full text-sm mb-2' type="text" />

                        <input
                            onChange={(e) => setdestinationPoint(e.target.value)}
                            onClick={() => { setexpand(true) }}
                            placeholder='Destination Point' className='bg-[#eeeeee] p-2 pl-4 rounded w-full text-sm' type="text" />
                    </form>
                </div>
                <div ref={panelRef} className='h-0 bg-white'>
                    <LocationSearchPanel setexpand={setexpand}  setchooseVehicleOpen={setchooseVehicleOpen} />
                </div>
            </div>
            <div ref={chooseVehicleRef} className='fixed z-10 translate-y-full w-full bottom-0 bg-white p-3 items-center' >
                <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
                <div className='flex border-2 active:border-black mb-2 rounded-xl w-full p-2 items-center  justify-between'>
                    <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646918/assets/e9/2eeb8f-3764-4e26-8b17-5905a75e7e85/original/2.png" alt="" />
                    <div>
                        <h4 className='font-medium text-base'>UberGo<span><i className='ri-user-3-fill'>4</i></span></h4>
                        <h5 className='font-medium text-sm'>2 mins away</h5>
                        <p className='font-normal text-xs text-gray-400'>Affordable,comfortable ride</p>
                    </div>
                    <h2 className='text-lg font-semibold'>₹196</h2>
                </div>
                <div className='flex border-2 active:border-black  mb-2 rounded-xl w-full p-2 items-center justify-between'>
                    <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
                    <div>
                        <h4 className='font-medium text-base'>Moto <span><i className='ri-user-3-fill'>1</i></span></h4>
                        <h5 className='font-medium text-sm'>3 mins away</h5>
                        <p className='font-normal text-xs text-gray-400'>Affordable,motorcycle ride</p>
                    </div>
                    <h2 className='text-lg font-semibold'>₹65</h2>
                </div>
                <div className='flex border-2 active:border-black  mb-2 rounded-xl w-full p-2 items-center justify-between'>
                    <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
                    <div>
                        <h4 className='font-medium text-base'>Auto <span><i className='ri-user-3-fill'>3</i></span></h4>
                        <h5 className='font-medium text-sm'>5 mins away</h5>
                        <p className='font-normal text-xs text-gray-400'>Affordable,Autorikshaw ride</p>
                    </div>
                    <h2 className='text-lg font-semibold'>₹118.4</h2>
                </div>
            </div>
        </div>
    )
}

export default Home