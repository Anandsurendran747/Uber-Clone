import React,{useState} from 'react';
import { Link } from 'react-router-dom';

const UserLogin = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [userData, setuserData] = useState({})
    const submitHandler = (e)=>{
        e.preventDefault();
        setuserData({
            email:email,
            password:password
        })
        console.log(userData);
        setemail('');
        setpassword('');
        
    }
    return (
        <div className='w-full h-screen p-5 flex flex-col justify-between pb-10'>
            <div>
            <img className='w-14 ml-10 mt-7 mb-7 ' src="https://imgs.search.brave.com/vBbm9LuD5lQv1_2YUcdpzHLQBY9AqgkXrUs4jawILGU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS81/ZWU3MzJiZWJkOTgz/OWI0OTRmZjI3Y2Qv/NWVmMGQ1MTU4ZTk0/YzhjZjUwMWY1ZWEz/X1ViZXJfbG9nb18y/MDE4LndlYnA" alt="" />
            <form onSubmit={(e)=>{submitHandler(e)}} action="">
                <h3 className='text-lg font-medium mb-2'>Whats your Email</h3>
                <input
                required
                value={email}
                onChange={(e)=>{setemail(e.target.value)}}
                className='w-full rounded border p-2 bg-[#eeeeee] mb-6' type="text" placeholder='example@gmail.com' />
                <h3 className='text-lg font-medium mb-2'>Password</h3>
                <input 
                required
                value={password}
                onChange={(e)=>{setpassword(e.target.value)}}
                className='w-full rounded border p-2 bg-[#eeeeee] mb-6' type="password" placeholder='password' />
                <button className='bg-[#111] text-white w-full rounded p-2 text-lg font-medium mb-2'>Login</button>
            </form>
            <p className='text-center mb-2'>New here? <Link className='text-[#4666da]' to={'/signup'}>Create an Account</Link></p>
            </div>
            <div>
                <Link to={'/captain-login'} className='flex items-center justify-center bg-[#288749] text-white w-full rounded p-2 text-lg font-medium'>Login as Captain</Link>
            </div>
        </div>
    );
};

export default UserLogin;