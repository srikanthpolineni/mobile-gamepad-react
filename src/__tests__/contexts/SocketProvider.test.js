import io from 'socket.io-client';
import MockedSocket from 'socket.io-mock';
import { SocketProvider, useSocket } from '../../contexts/SocketProvider';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';


jest.mock('socket.io-client');


function TestComponent() {

    const { status } = useSocket();
    return (
        <div>
            <span>Status:{status}</span>
        </div>
    )
}


describe('socketProvider', () => {
    let socket;
    beforeEach(() => {
        socket = new MockedSocket();
        socket.connect = jest.fn();
        io.mockReturnValue(socket);
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('1', () => {

        expect(SocketProvider).toBeTruthy();

        act(() => {
            render(
                <SocketProvider>
                    <TestComponent />
                </SocketProvider>
            );
        });

        expect(screen.getByText(/^Status:/)).toHaveTextContent('Status:Connecting');

        act(() => {
            socket.socketClient.emit("connect", {});
        });

        expect(screen.getByText(/^Status:/)).toHaveTextContent('Status:Connected');

        act(() => {
            socket.socketClient.emit("disconnect", {});
        });

        expect(screen.getByText(/^Status:/)).toHaveTextContent('Status:Error');

        act(() => {
            socket.socketClient.emit("connect_error", {});
        });

        expect(screen.getByText(/^Status:/)).toHaveTextContent('Status:Error');
    });

});