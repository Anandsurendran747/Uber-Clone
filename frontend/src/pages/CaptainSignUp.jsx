import axios from 'axios';
import React, { useState,useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {captainDataContext} from '../context/CaptainContext';
const CaptainSignUp = () => {
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('')
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [vehicleColor, setVehicleColor] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicleCapacity, setVehicleCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [captain,setcaptain] = useContext(captainDataContext);
  const navigate = useNavigate();
  const submitHandler = async(e) => {
    e.preventDefault();
    const captain = {
      fullname: {
        firstname: firstname,
        lastname: lastname
      },
      email: email,
      password: password,
      vehicle:{
        color:vehicleColor,
        plate:vehiclePlate,
        capacity:vehicleCapacity,
        vehicleType:vehicleType
      }
    };
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/register`,captain);

    if(response.status == 201){
      setcaptain(response.data.captain);
      localStorage.setItem('token',response.data.token);
      navigate('/captain/home')
    }
    setfirstname('');
    setlastname('');
    setemail('');
    setpassword('');

  }
  return (
    <div className='w-full h-screen p-5 flex flex-col justify-between pb-10'>
      <div>
        <img className='w-14 ml-10 mt-7 mb-7 ' src="https://imgs.search.brave.com/vBbm9LuD5lQv1_2YUcdpzHLQBY9AqgkXrUs4jawILGU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4ucHJvZC53ZWJzaXRlLWZpbGVzLmNvbS81ZWU3MzJiZWJkOTgzOWI0OTRmZjI3Y2QvNWVmMGQ1MTU4ZTk0YzhjZjUwMWY1ZWEzX1ViZXJfbG9nb18yMDE4LndlYnA" alt="" />
        <form onSubmit={(e) => { submitHandler(e) }} action="">
          <h3 className='text-base font-medium mb-2'>Whats your Name</h3>
          <div className='flex w-full gap-4 mb-6'>
            <input
              value={firstname}
              onChange={(e) => { setfirstname(e.target.value) }}
              required
              className='w-1/2 rounded border p-2 bg-[#eeeeee] ' type="text" placeholder='Firstname' />
            <input
              value={lastname}
              onChange={(e) => { setlastname(e.target.value) }}
              required
              className='w-1/2 rounded border p-2 bg-[#eeeeee] ' type="text" placeholder='lastname' />
          </div>
          <h3 className='text-base font-medium mb-2'>Whats your Email</h3>
          <input
            required
            value={email}
            onChange={(e) => { setemail(e.target.value) }}
            className='w-full rounded border p-2 bg-[#eeeeee] mb-6' type="text" placeholder='example@gmail.com' />
          <h3 className='text-base font-medium mb-2'>Password</h3>

          <input
            required
            value={password}
            onChange={(e) => { setpassword(e.target.value) }}
            className='w-full rounded border p-2 bg-[#eeeeee] mb-6' type="password" placeholder='password' />
          <div className='flex w-full gap-4 mb-6'>
            <div className='w-1/2'>
              <h3 className='text-base font-medium mb-2'>Whats your Vehicle Color</h3>
              <input
                required
                value={vehicleColor}
                onChange={(e) => { setVehicleColor(e.target.value) }}
                className='w-full rounded border p-2 bg-[#eeeeee] mb-6' type="text" placeholder='color' />
            </div>

            <div className='w-1/2'>
              <h3 className='text-base font-medium mb-2'>Whats your vehicle Number</h3>
              <input
                required
                value={vehiclePlate}
                onChange={(e) => { setVehiclePlate(e.target.value) }}
                className='w-full rounded border p-2 bg-[#eeeeee] mb-6' type="text" placeholder='vehicle number' />
            </div>
          </div>
          <div className='flex w-full gap-4 mb-6'>
            <div className='w-1/2'>
              <h3 className='text-base font-medium mb-2'>Whats your vehicle Capacity</h3>
              <input
                required
                value={vehicleCapacity}
                onChange={(e) => { setVehicleCapacity(e.target.value) }}
                className='w-full rounded border p-2 bg-[#eeeeee] mb-6' type="number" placeholder='vehicle capacity' />
            </div>
            <div className='w-1/2'>
              <h3 className='text-base font-medium mb-2'>Whats your vehicle type</h3>
              <select
                required
                value={vehicleType}
                onChange={(e) => { setVehicleType(e.target.value) }}
                className='w-full rounded border p-2 bg-[#eeeeee] mb-6'>
                <option value="">Select vehicle type</option>
                <option value="motorcycle">Motorcycle</option>
                <option value="auto">Auto</option>
                <option value="car">Car</option>
              </select>
            </div>
          </div>
          <button className='bg-[#111] text-white w-full rounded p-2 text-lg font-medium mb-2'>SignUp</button>
        </form>
        <p className='text-center mb-2'>Already have an Account? <Link className='text-[#4666da]' to={'/captain-login'}>Login here</Link></p>
      </div>
      <div>
      </div>
    </div>
  )
}

export default CaptainSignUp