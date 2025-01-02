import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { captainDataContext } from '../context/CaptainContext';

const CaptainProtectWrapper = ({ children }) => {
    const token = localStorage.getItem('token');
    const [isLoading, setisLoading] = useState(true);
    const { captain, setcaptain } = useContext(captainDataContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate('/captain-login');
        }
    }, [token])

    axios.get(`${import.meta.env.VITE_BASE_URL}/captain/profile`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        if (response.status == 200) {
            setcaptain(response.data)
            setisLoading(false);
        }
    }).catch(err => {
        localStorage.removeItem('token');
        navigate('/captain-login')
    })

    if (isLoading) {
        return (
            <div>Loading......</div>
        )
    }

    return (
        <div>{children}</div>
    )
}

export default CaptainProtectWrapper