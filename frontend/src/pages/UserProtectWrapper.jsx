import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userDataContext } from '../context/UserContext';


const UserProtectWrapper = ({ children }) => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const [isLoading, setisLoading] = useState(true)
    const [user, setuser] = useContext(userDataContext);

    useEffect(() => {
        if (!token) {
            navigate('/login')
        }
    }, [token])

    axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        if (response.status == 200) {
            setuser(response.data.user);
            setisLoading(false);
        }
    }).catch(error => {
        localStorage.removeItem('token');
        navigate('/login');
    })

    if (isLoading) {
        return (
            <div>Loading....</div>
        )
    }


    return (
        <div>{children}</div>
    )
}

export default UserProtectWrapper