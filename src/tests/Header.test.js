import React from 'react';
import Header from '../components/layout/Header';
import { shallow } from 'enzyme';

describe('Header', () => {
  it('displays headings', () => {
    const wrapper = shallow(<Header />)
    const heading = wrapper.find('h1').text()
    const subheading = wrapper.find('h2').text()
    expect(heading).toEqual('Health & Safety')
    expect(subheading).toEqual('Translator')
  })
})
