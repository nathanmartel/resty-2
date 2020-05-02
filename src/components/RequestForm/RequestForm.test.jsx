import React from 'react';
import { shallow } from 'enzyme';
import RequestForm from './RequestForm';

describe('RequestForm component', () => {
  it('renders RequestForm', () => {
    const wrapper = shallow(<RequestForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
