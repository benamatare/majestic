
import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../components/button.js';


describe('<Button />', () => {
    const props = { className: "frame-next" }
    const wrapper = shallow(<Button onClick={jest.fn()} {...props}/>)
    
        it('It receives props as a className of frame-next',() =>{
            expect(wrapper.is('.frame-next')).toEqual(true);
        });
        it('Renders as a span html element',() => {
            expect(wrapper.find('span').exists()).toBe(true);
        });

});

