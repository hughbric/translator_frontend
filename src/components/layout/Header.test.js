import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

describe('<Header />', () => {
  it('shallow renders headings', () => {
    const wrapper = shallow(<Header />);
    const heading = wrapper.find('h1').text();
    const subheading = wrapper.find('h2').text();
    expect(heading).toEqual('Health & Safety');
    expect(subheading).toEqual('Translator');
  });
});
