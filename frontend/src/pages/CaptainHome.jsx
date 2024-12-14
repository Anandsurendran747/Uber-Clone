import React, { useRef, useState } from 'react'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ConfirmRidePopUp from '../components/ConfirmRidePopUp';

const CaptainHome = () => {
  const [ridePopUpPanel, setridePopUpPanel] = useState(true);
  const ridePopUpPanelRef = useRef(null);
  const [confirmRidePopUpPanel, setconfirmRidePopUpPanel] = useState(false);
  const confirmRidePopUpPanelRef = useRef(null);

  useGSAP(function () {
    if (ridePopUpPanel) {
      gsap.to(ridePopUpPanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(ridePopUpPanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [ridePopUpPanel]);

  useGSAP(function () {
    if (confirmRidePopUpPanel) {
      gsap.to(confirmRidePopUpPanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(confirmRidePopUpPanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [confirmRidePopUpPanel]);

  return (
    <div className="w-screen h-screen bg-gray-100 flex flex-col items-center justify-center relative">
      <div className="w-10 h-10 p-2 absolute top-2 right-2 m-3 rounded-full bg-gray-100 shadow-sm shadow-black">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1m0-10V5m0 10v1m0-10V5" />
        </svg>
      </div>
      <div className="flex flex-col w-screen h-screen">
        <div className="p-4 h-1/2">
          <img src="https://imgs.search.brave.com/zP_AcfQVDRJoftJJh0BqOtIa5lKArDZtWkkPW_Ys6tc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9saDMu/Z29vZ2xldXNlcmNv/bnRlbnQuY29tL1hr/MnhpbWhlQmgySk1Q/d0FrcUVsbmZ1a25U/LVkyX01BN0NNZ01V/ekxfOVhMYXBheHNl/V1pvQVFvaHozcDBG/UXduSWxZNFdDSm9C/LUZNV1VhaE5wVHpN/TFBmRzJPZkN1cmUy/NHBHV0FDPXc2Mzg" alt="Map" className="w-full h-full object-cover rounded-lg shadow-md" />
        </div>
        <div className="p-2 h-1/2">
          <CaptainDetails />
        </div>
        <div ref={ridePopUpPanelRef} className='fixed z-10 translate-y-full w-full bottom-0 bg-white p-3 items-center' >
          <RidePopUp setridePopUpPanel={setridePopUpPanel} setconfirmRidePopUpPanel={setconfirmRidePopUpPanel} />
        </div>
        <div ref={confirmRidePopUpPanelRef} className='fixed h-screen z-10 translate-y-full  w-full bottom-0 bg-white p-3 items-center' >
          <ConfirmRidePopUp setconfirmRidePopUpPanel={setconfirmRidePopUpPanel} setridePopUpPanel={setridePopUpPanel} />
        </div>
      </div>
    </div>
  )
}

export default CaptainHome