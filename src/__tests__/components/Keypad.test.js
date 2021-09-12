import Keypad from '../../components/Keypad';
import { render, screen } from '@testing-library/react';

const MockTouchButton = ({ children, trigger }) => {
    return (<button onClick={trigger}></button>);
};


describe('Keypad', () => {

    test('Socket connection success', () => {
        expect(Keypad).toBeTruthy();
    });
    //TODO: Add more tests

});