import React from 'react';
import { useSocket, CONNECTION_STATUS } from '../contexts/SocketProvider';
import WifiIcon from '@material-ui/icons/Wifi';
import SignalWifiOffIcon from '@material-ui/icons/SignalWifiOff';
import { Grid } from '@material-ui/core';

export default function ConnectStatus() {

    const { status } = useSocket();
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item >
                {
                    status === CONNECTION_STATUS.CONNECTED ?
                        <WifiIcon style={{ color: 'green', fontSize: '2.0rem', marginTop: '20px' }} /> :
                        <SignalWifiOffIcon style={{ color: 'red', fontSize: '2.0rem', marginTop: '20px' }} />
                }
            </Grid>
        </Grid>
    )
}
