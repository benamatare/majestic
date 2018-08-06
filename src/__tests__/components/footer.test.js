
import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../components/footer.js';


describe('<Footer />', () => {
    const wrapper = shallow(<Footer />)
    
        it('Renders as a span html element',() => {
            expect(wrapper.find('span').exists()).toBe(true);
        });
        it('Renders with text of majestic',() => {
            expect(wrapper.find('span').text()).toBe('majestic'); 
        });

});

