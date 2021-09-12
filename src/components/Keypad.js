import React, { useReducer, useEffect } from 'react';
import { ArrowLeft as ArrowLeftIcon, } from '@material-ui/icons';
import { Grid, Icon, } from "@material-ui/core";
import TouchButton from './TouchButton';
import { useSocket, CONNECTION_STATUS } from '../contexts/SocketProvider';


const currentState = { Up: 0, Down: 0, Left: 0, Right: 0, A: 0, B: 0 };

const reducer = (state, action) => {
    return { ...state, [action.button]: action.status };
};

export default function Keypad() {

    const [state, dispatch] = useReducer(reducer, currentState);

    const { socket, status } = useSocket();

    const onTrigger = (action) => {
        dispatch(action);
    };

    const byteArrayToInt = function (byteArray) {
        let value = 0;
        for (let i = byteArray.length - 1; i >= 0; i--) {
            value = value + (byteArray[i] * Math.pow(2, 7 - i));
        }
        return value;
    };

    useEffect(() => {
        /* istanbul ignore else*/
        if (status === CONNECTION_STATUS.CONNECTED && socket !== undefined) {
            try {
                let byteArray = new Uint8Array(8);
                Object.keys(state).forEach((k, index) => {
                    byteArray[8 - (index + 1)] = state[k];
                });
                console.log(state);
                socket.emit('CLIENT_TRIGGER', { data: byteArrayToInt(byteArray) });
            } catch (e) { }
        }

    }, [status, socket, state]);


    return (
        <Grid container direction="row" rowSpacing={20} columnSpacing={20} sx={{ flexGrow: 1 }} justifyContent="center" alignItems="center">
            <Grid item>
                <Grid container direction="column" rowSpacing={1} columnSpacing={1}>
                    <Grid container spacing={3} direction="row" justifyContent="center" alignItems="center">
                        <Grid item >
                            <TouchButton button="Up" trigger={onTrigger}>
                                <ArrowLeftIcon sx={{ transform: "rotate(90deg)" }} />
                            </TouchButton>
                        </Grid>
                    </Grid>
                    <Grid container spacing={10} direction="row" justifyContent="center" alignItems="center">
                        <Grid item >
                            <TouchButton button="Left" trigger={onTrigger}>
                                <ArrowLeftIcon sx={{ transform: "rotate(0deg)" }} />
                            </TouchButton>
                        </Grid>
                        <Grid item >
                            <TouchButton button="Right" trigger={onTrigger}>
                                <ArrowLeftIcon sx={{ transform: "rotate(-180deg)" }} />
                            </TouchButton>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} direction="row" justifyContent="center" alignItems="center">
                        <Grid item >
                            <TouchButton button="Down" trigger={onTrigger}>
                                <ArrowLeftIcon sx={{ transform: "rotate(-90deg)" }} />
                            </TouchButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container spacing={3} direction="row" justifyContent="center" alignItems="center">
                    <Grid item>
                        <TouchButton button="A" trigger={onTrigger}>
                            <Icon style={{ color: 'darkgreen', fontSize: '2.0rem', marginTop: "-10px" }}>A</Icon>
                        </TouchButton>
                    </Grid>
                    <Grid item>
                        <TouchButton button="B" trigger={onTrigger}>
                            <Icon style={{ color: 'darkred', fontSize: '2.0rem', marginTop: "-10px" }}>B</Icon>
                        </TouchButton>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
