import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { experimentalStyled } from '@material-ui/core/styles';

const RoundedButton = experimentalStyled('button')(({ theme }) => ({
    position: 'relative',
    width: '7em',
    height: '7em',
    borderRadius: '50%',
    outline: 'none',
    border: '4px #090909 solid',
    background: 'var(--background)',
    boxShadow: 'var(--baxShadow)',
    color: '#fff',
    '&::before': {
        content: '"H"',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: 'inherit',
        background: 'linear-gradient(145deg, #262626, #606060)',
        width: '7.25em',
        height: '7.25em',
        zIndex: '-1',
        boxShadow: '11px 11px 22px #141414, -11px -11px 22px #525252',
    },
}));

const defaultColor = {
    '--background': 'linear-gradient(-145deg, #171717, #444125)',
    '--baxShadow': 'inset 2px 2px 0px #7d7c7e, inset -2px -2px 0px #1c1c1c',
};

const triggerColor = {
    '--background': 'linear-gradient(185deg, #131313, #444245)',
    '--baxShadow': 'inset -2px -2px 0px #008ECE, inset 2px 2px 0px #008ECE',
};


function TouchButton({ children, button, trigger }) {

    const elementRef = useRef();

    const [color, setColor] = useState(defaultColor);



    const touchStart = (e) => {
        setColor(triggerColor);
        /* istanbul ignore else*/
        if (typeof trigger === 'function') {
            trigger({ button, status: 1 });
        }
    };

    const touchEnd = (e) => {
        setColor(defaultColor);
        /* istanbul ignore else*/
        if (typeof trigger === 'function') {
            trigger({ button, status: 0 });
        }
    };


    return (
        <RoundedButton ref={elementRef} onTouchStart={touchStart} onTouchEnd={touchEnd} style={color}>
            {children}
        </RoundedButton>
    )
};

TouchButton.propTypes = {
    trigger: PropTypes.func,
    button: PropTypes.string,
}

export default TouchButton;
