import React, { createContext, useState } from 'react'

export const captainDataContext = createContext();

const CaptainContext = ({ children }) => {

    const [captain, setcaptain] = useState({
        fullname: {
            firstname: '',
            lastname: ''
        },
        email: '',
        password: '',
        vehicle: {
            color: '',
            plate: '',
            capacity: '',
            vehicleTye: ''
        }

    })

    return (
        <div><captainDataContext.Provider value={{captain, setcaptain}}>
            {children}
        </captainDataContext.Provider></div>
    )
}

export default CaptainContext