import TouchButton from '../../components/TouchButton';
//import { render, screen, fireEvent } from '@testing-library/react';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe('TouchButton', () => {

    test('Valid trigger function should be invoked', async () => {

        debugger;
        expect(TouchButton).toBeTruthy();
        const trigger = jest.fn();
        const component = mount(<TouchButton trigger={trigger} button="A">Hello</TouchButton>);
        component.simulate('touchStart', { touches: [{ clientX: 100, clientY: 100 }] });
        expect(trigger).toHaveBeenCalledTimes(1);
        component.simulate('touchEnd', { touches: [{ clientX: 100, clientY: 100 }] });
        expect(trigger).toHaveBeenCalledTimes(2);
    });

});
