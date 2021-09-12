import ConnectStatus from '../../components/ConnectStatus';
import { render, screen } from '@testing-library/react';


let mockStatus = "Connected";


jest.mock('../../contexts/SocketProvider', () => ({
    useSocket: () => ({ status: mockStatus }),
    CONNECTION_STATUS: {
        CONNECTING: 'Connecting',
        CONNECTED: 'Connected',
        ERROR: 'Error'
    }

}));

describe('ConnectStatus', () => {

    afterAll(() => {
        jest.resetAllMocks();
    });

    test('Success status', () => {

        expect(ConnectStatus).toBeTruthy();
        render(<ConnectStatus />);
        //screen.debug();
        expect(screen.getByTestId('WifiIcon')).toBeTruthy();
    });

    test('Failed status', () => {
        mockStatus = "Error"
        render(<ConnectStatus />);
        expect(screen.getByTestId('SignalWifiOffIcon')).toBeTruthy();
    });
});