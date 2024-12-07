import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { userDataContext } from '../context/UserContext'

const UserSignUp = () => {
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('')
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [user, setUser] = useContext(userDataContext);
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    const user = {
      fullname: {
        firstname: firstname,
        lastname: lastname
      },
      email: email,
      password: password
    };
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, user);

    if (response.status == 201) {
      const user = response.data.user;
      setUser(user);
      localStorage.setItem('token', response.data.token);
      navigate('/home')
    }
    setfirstname('');
    setlastname('');
    setemail('');
    setpassword('');

  }
  return (
    <div className='w-full h-screen p-5 flex flex-col justify-between pb-10'>
      <div>
        <img className='w-14 ml-10 mt-7 mb-7 ' src="https://imgs.search.brave.com/vBbm9LuD5lQv1_2YUcdpzHLQBY9AqgkXrUs4jawILGU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS81/ZWU3MzJiZWJkOTgz/OWI0OTRmZjI3Y2Qv/NWVmMGQ1MTU4ZTk0/YzhjZjUwMWY1ZWEz/X1ViZXJfbG9nb18y/MDE4LndlYnA" alt="" />
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
          <button className='bg-[#111] text-white w-full rounded p-2 text-lg font-medium mb-2'>SignUp</button>
        </form>
        <p className='text-center mb-2'>Already have an Account? <Link className='text-[#4666da]' to={'/login'}>Login here</Link></p>
      </div>
      <div>
      </div>
    </div>
  )
}

export default UserSignUp