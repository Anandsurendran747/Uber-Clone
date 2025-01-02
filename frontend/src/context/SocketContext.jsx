import React, { createContext, useEffect } from 'react'
import { io } from 'socket.io-client'

export const SocketDataContext = createContext();

const socket = io(`${import.meta.env.VITE_BASE_URL}`);

const SocketContext = ({ children }) => {

    useEffect(() => {
        socket.on('connect', () => {
            console.log('connected to server');
        });

        socket.on('disconnect', () => {
            console.log("Disconnected from server");
        });
    }, []);

    return (
        <div>
            <SocketDataContext.Provider value={{ socket }}>
                {children}
            </SocketDataContext.Provider>
        </div>
    )
}

export default SocketContext