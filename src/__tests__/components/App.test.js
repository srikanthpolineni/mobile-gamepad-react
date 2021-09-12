
import App from '../../components/App';
import { render, screen } from '@testing-library/react';


jest.mock('../../components/Keypad', () => {
    const KeypadMock = () => <div>Touch pad renders here</div>;
    return KeypadMock;
});

jest.mock('../../components/ConnectStatus', () => {
    const ConnectStatusMock = () => <div>ConnectStatus here</div>;
    return ConnectStatusMock;
});

jest.mock('../../contexts/SocketProvider', () => {
    const SocketProviderMock = ({ children }) => <div>{children}</div>;
    return { SocketProvider: SocketProviderMock };
});


describe('App', () => {

    test('1', () => {

        expect(App).toBeTruthy();

        render(<App />);

        //screen.debug();

        expect(screen.getByText("Touch pad renders here")).toBeInTheDocument();
    });


});