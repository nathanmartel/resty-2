import React from 'react';
import { shallow } from 'enzyme';
import FormContainer from './FormContainer';

describe('FormContainer component', () => {
  it('renders FormContainer', () => {
    const wrapper = shallow(<FormContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
