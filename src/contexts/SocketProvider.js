import React, { useContext, useEffect, useState } from 'react'
import io from 'socket.io-client';

const SocketContext = React.createContext();

export function useSocket() {
    return useContext(SocketContext);
}

export const CONNECTION_STATUS = {
    CONNECTING: 'Connecting',
    CONNECTED: 'Connected',
    ERROR: 'Error'
};

export function SocketProvider(props) {

    const [socket, setSocket] = useState();
    const [status, setStatus] = useState(CONNECTION_STATUS.CONNECTING);

    useEffect(() => {
        const newSocket = io(
            {
                transports: ["websocket"],
                autoConnect: false,
                reconnectionDelay: 10000,
                reconnectionAttempts: 100
            });

        newSocket.on("connect", () => {
            setStatus(CONNECTION_STATUS.CONNECTED);
        });
        newSocket.on("disconnect", () => {
            setStatus(CONNECTION_STATUS.ERROR);
        });

        newSocket.on("connect_error", (error) => {
            setStatus(CONNECTION_STATUS.ERROR);
        });
        newSocket.connect()
        setSocket(newSocket);

        return () => {
            try {
                newSocket.close()
            } catch (e) {
            }
        }
    }, []);

    return (
        <SocketContext.Provider value={{ socket, status }}>
            {props.children}
        </SocketContext.Provider>
    )
}
