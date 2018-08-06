
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import App from '../../components/app.js';
import NoFrame from '../../components/noframe.js';
import Frame from '../../components/frame.js';

describe('<App />', () => {

  describe('Render()', () => {
    const wrapper = shallow(<App onClick={jest.fn()} />)

      it('Renders a <div className="majestic"> ', () => {
        expect(wrapper.find('div.majestic').exists()).toBe(true)
      });
  });

  describe('<App /> State', () => {

    test('State = false on default ', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.state('first_load')).toBe(false)
    });

    test('State = true on click', () => {
      const wrapper = shallow(<App />);
      const instance = wrapper.instance();

      expect(wrapper.state('first_load')).toBe(false);
      instance.onClick();
      expect(wrapper.state('first_load')).toBe(true);

    });
  });

    describe('Child: noFrame when state = false', () => {

      test('State is false, NoFrame is loaded', () => {
        const wrapper = mount(<App />);
        const child = shallow(<NoFrame />)
        expect(wrapper.state('first_load')).toBe(false)

        expect(wrapper.find(child)).toHaveLength(0)
      });
      

    });
    


});

