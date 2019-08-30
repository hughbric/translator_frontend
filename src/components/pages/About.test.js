import React from 'react';
import About from './About';
import { shallow } from 'enzyme';

describe('About', () => {
  it('displays about page', () => {
    const wrapper = shallow(<About />)
    const heading = wrapper.find('h1').text()
    expect(heading).toEqual('About')
  })
})
