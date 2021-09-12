import Keypad from '../../components/Keypad';
import MockedSocket from 'socket.io-mock';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';


jest.mock('../../components/TouchButton', () => {
    //Use onClick instead of onTouch to simulate action
    const MockTouchButton = ({ children, trigger, button }) => (
        <button onClick={() => trigger({ button, status: 1 })} >{button}</button>
    );
    return MockTouchButton;
});


let mockStatus = "Connected";
let mockSocket = new MockedSocket();


jest.mock('../../contexts/SocketProvider', () => ({
    useSocket: () => ({ status: mockStatus, socket: mockSocket }),
    CONNECTION_STATUS: {
        CONNECTING: 'Connecting',
        CONNECTED: 'Connected',
        ERROR: 'Error'
    }

}));

describe('Keypad', () => {

    let spy;
    beforeEach(() => {
        spy = jest.spyOn(console, 'log').mockImplementationOnce(() => { });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });


    test('single key pressed', () => {
        expect(Keypad).toBeTruthy();

        render(
            <Keypad />
        );

        jest.clearAllMocks();

        act(() => {
            fireEvent.click(screen.getByText('A', { selector: 'button' }));
        });

        expect(console.log.mock.calls.length).toBe(1);
        expect(console.log.mock.calls[0][0]['A']).toBe(1);
    });

    test('multiple keys pressed', () => {
        expect(Keypad).toBeTruthy();

        render(
            <Keypad />
        );

        jest.clearAllMocks();

        act(() => {
            fireEvent.click(screen.getByText('A', { selector: 'button' }));
        });

        act(() => {
            fireEvent.click(screen.getByText('Up', { selector: 'button' }));
        });

        expect(console.log.mock.calls.length).toBe(2);
        expect(console.log.mock.calls[0][0]['A']).toBe(1);
        expect(console.log.mock.calls[0][0]['Up']).toBe(0);
        expect(console.log.mock.calls[1][0]['A']).toBe(1);
        expect(console.log.mock.calls[1][0]['Up']).toBe(1);
    });

});