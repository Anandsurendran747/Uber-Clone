import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRidePanel from '../components/ConfirmRidePanel';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';
import axios from 'axios';

const Home = () => {
    const [pickupPoint, setpickupPoint] = useState('');
    const [destinationPoint, setdestinationPoint] = useState('');
    const panelRef = useRef(null);
    const closeRef = useRef(null);
    const chooseVehicleRef = useRef(null);
    const [expand, setexpand] = useState(false);
    const [chooseVehicleOpen, setchooseVehicleOpen] = useState(false);
    const [confirmRidePanel, setconfirmRidePanel] = useState(false);
    const confirmRidePanelRef = useRef(null);
    const [lookingForDriver, setlookingForDriver] = useState(false);
    const lookingForDriverRef = useRef(null);
    const [pickupSuggessions, setpickupSuggessions] = useState([]);
    const [destinationSuggessions, setdestinationSuggessions] = useState([]);
    const [acitveFeild, setactiveFeild] = useState(null);

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
    }, [chooseVehicleOpen]);


    useGSAP(function () {
        if (confirmRidePanel) {
            gsap.to(confirmRidePanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(confirmRidePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [confirmRidePanel]);

    useGSAP(function () {
        if (lookingForDriver) {
            gsap.to(lookingForDriverRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(lookingForDriverRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [lookingForDriver]);

    function submitHandler(e) {
        e.preventDefault();
    }

    async function handletPickupChange(e) {
        setpickupPoint(e.target.value);
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/getSuggessions`, {
                params: { loc: e.target.value },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            setpickupSuggessions(response.data);
        } catch (error) {

        }
    }
    async function handletDestinationChange(e) {
        setdestinationPoint(e.target.value);
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/getSuggessions`, {
                params: { loc: e.target.value },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            setdestinationSuggessions(response.data);
        } catch (error) {

        }
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
                            onClick={() => {
                                setexpand(true)
                                setactiveFeild('pickup')
                            }}
                            value={pickupPoint}
                            onChange={handletPickupChange}


                            placeholder='Pickup Point' className='bg-[#eeeeee] p-2 pl-4 rounded w-full text-sm mb-2' type="text" />

                        <input
                            onChange={(e) => handletDestinationChange(e)}
                            onClick={() => {
                                setactiveFeild('desti')
                                setexpand(true)
                            }}
                            value={destinationPoint}
                            placeholder='Destination Point' className='bg-[#eeeeee] p-2 pl-4 rounded w-full text-sm' type="text" />
                    </form>
                </div>
                <div ref={panelRef} className='h-0 bg-white '>
                    <LocationSearchPanel
                        setpickupPoint={setpickupPoint}
                        setdestinationPoint={setdestinationPoint}
                        acitveFeild={acitveFeild}
                        pickupSuggessions={acitveFeild == 'pickup' ? pickupSuggessions : destinationSuggessions}
                        setexpand={setexpand}
                        setchooseVehicleOpen={setchooseVehicleOpen} />
                </div>
            </div>
            <div ref={chooseVehicleRef} className='fixed z-10 translate-y-full w-full bottom-0 bg-white p-3 items-center' >
                <VehiclePanel setconfirmRidePanel={setconfirmRidePanel} setchooseVehicleOpen={setchooseVehicleOpen} />
            </div>
            <div ref={confirmRidePanelRef} className='fixed z-10 translate-y-full w-full bottom-0 bg-white p-3 items-center' >
                <ConfirmRidePanel setconfirmRidePanel={setconfirmRidePanel} setlookingForDriver={setlookingForDriver} />
            </div>
            <div ref={lookingForDriverRef} className='fixed z-10 translate-y-full w-full bottom-0 bg-white p-3 items-center' >
                <LookingForDriver />
            </div>
            <div className='fixed z-10 translate-y-full  w-full bottom-0 bg-white p-3 items-center' >
                <WaitingForDriver />
            </div>
        </div>
    )
}

export default Home