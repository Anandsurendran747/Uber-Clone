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
    const [expand, setexpand] = useState(false);

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
    }, [expand])

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
                    <LocationSearchPanel />
                </div>
            </div>
        </div>
    )
}

export default Home