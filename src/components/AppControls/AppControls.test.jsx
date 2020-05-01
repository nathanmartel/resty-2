import React from 'react';
import { shallow } from 'enzyme';
import AppControls from './AppControls';

describe('AppControls component', () => {
  it('renders AppControls', () => {
    const wrapper = shallow(<AppControls />);
    expect(wrapper).toMatchSnapshot();
  });
});
