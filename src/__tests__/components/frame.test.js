
import React from 'react';
import { shallow, mount } from 'enzyme';
import Frame from '../../components/frame.js';
import Button from '../../components/button.js';

// it renders a div
// it renders an iframe
// it renders a button

// onclick state changes
// component did mount worked

describe('<Frame />', () => {

  describe('Render()', () => {
    const wrapper = shallow(<Frame />);
    // console.log(wrapper.debug());
    test('Renders a <div className="frame-container', () => {
      expect(wrapper.find('div.frame-container').exists()).toBe(true);
    });
    it('Renders a <h3 className="frame-song-title', () => {
      expect(wrapper.find('h3.frame-song-title').exists()).toBe(true);
    });
    it('Renders a <button className="frame-next', () => {
      expect(wrapper.find('Button.frame-next').exists()).toBe(true);
    });

  });
  describe('<Frame /> State', () => {
    const wrapper = shallow(<Frame />)
    test(`State: videos = [] ,is default`, () => {
      expect(wrapper.state('videos')).toHaveLength(0);
    });
    test(`State: title =  "" ,is default`, () => {
      expect(wrapper.state('title')).toMatch("");
    });
  });


 


});