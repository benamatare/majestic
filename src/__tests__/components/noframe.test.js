
import React from 'react';
import { shallow } from 'enzyme';
import NoFrame from '../../components/noframe.js';

describe('<NoFrame />', () => {
    const props = { className: "frame-container" }
    const wrapper = shallow(<NoFrame onClick={jest.fn()} {...props}/>)
    
        it('It receives props as a className of frame-container',() =>{
            expect(wrapper.is('.frame-container')).toEqual(true);
        });
        it('Renders as a span html element',() => {
            expect(wrapper.find('span').exists()).toBe(true);
        });

});

