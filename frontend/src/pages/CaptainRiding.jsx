import React, { useRef, useState } from 'react'
import FinishRide from '../components/FinishRide'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const CaptainRiding = () => {
    const [finishPopUp, setfinishPopUp] = useState(false);
    const finshPopUpRef = useRef(null);


    useGSAP(function () {
        if (finishPopUp) {
          gsap.to(finshPopUpRef.current, {
            transform: 'translateY(0)'
          })
        } else {
          gsap.to(finshPopUpRef.current, {
            transform: 'translateY(100%)'
          })
        }
      }, [finishPopUp]);

    return (
        <div className="w-screen h-screen bg-gray-100 flex flex-col items-center justify-center relative">

            <div className="flex flex-col w-screen h-screen">
                <div className=" h-4/5">
                    <img src="https://imgs.search.brave.com/zP_AcfQVDRJoftJJh0BqOtIa5lKArDZtWkkPW_Ys6tc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9saDMu/Z29vZ2xldXNlcmNv/bnRlbnQuY29tL1hr/MnhpbWhlQmgySk1Q/d0FrcUVsbmZ1a25U/LVkyX01BN0NNZ01V/ekxfOVhMYXBheHNl/V1pvQVFvaHozcDBG/UXduSWxZNFdDSm9C/LUZNV1VhaE5wVHpN/TFBmRzJPZkN1cmUy/NHBHV0FDPXc2Mzg" alt="Map" className="w-full h-full object-cover rounded-lg shadow-md" />
                </div>
                <div onClick={()=>{
                    setfinishPopUp(true);
                }} className="  h-1/5 flex flex-col">
                    <div className='1/3 w-screen flex justify-center items-start'>
                        <i className='ri-arrow-up-wide-line text-3xl text-black-100'></i>
                    </div>
                    <div className='2/3 p-2 flex items-center justify-between'>
                        <h4>4 km Away</h4>
                        <button className='bg-yellow-400 p-2 rounded-lg text-white'>Complete Ride</button>
                    </div>
                </div>

            </div>
            <div ref={finshPopUpRef} className='fixed  z-10 translate-y-full  w-full bottom-0 bg-white p-3 items-center' >
                <FinishRide setfinishPopUp={setfinishPopUp} />
            </div>
        </div>
    )
}

export default CaptainRiding