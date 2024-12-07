import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <div className='justify-between pt-8 h-screen w-full bg-cover bg-center flex flex-col bg-[url(https://images.unsplash.com/photo-1593950315186-76a92975b60c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGF4aXxlbnwwfHwwfHx8MA%3D%3D)]'>

            <img className='w-14 ml-10 ' src="https://imgs.search.brave.com/vBbm9LuD5lQv1_2YUcdpzHLQBY9AqgkXrUs4jawILGU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS81/ZWU3MzJiZWJkOTgz/OWI0OTRmZjI3Y2Qv/NWVmMGQ1MTU4ZTk0/YzhjZjUwMWY1ZWEz/X1ViZXJfbG9nb18y/MDE4LndlYnA" alt="" />

            <div className='bg-white py-5 px-10 pb-7'>
                <h2 className='text-2xl font-bold'>Get Started with Uber</h2>
                <Link to={'/login'} className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-2'>Continue</Link>
            </div>
        </div>
    )
}

export default Landing