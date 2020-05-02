import React from 'react';
import { shallow } from 'enzyme';
import Results from './Results';

describe('Results component', () => {
  it('renders Results', () => {
    const item = {
      test: 'Lorem ipsum'
    };
    const wrapper = shallow(<Results item={item} />);
    expect(wrapper).toMatchSnapshot();
  });
});
