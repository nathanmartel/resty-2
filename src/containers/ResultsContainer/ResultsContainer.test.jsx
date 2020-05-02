import React from 'react';
import { shallow } from 'enzyme';
import ResultsContainer from './ResultsContainer';

describe('ResultsContainer component', () => {
  it('renders ResultsContainer', () => {
    const item = {
      test: 'Lorem ipsum'
    };
    const wrapper = shallow(<ResultsContainer item={item} />);
    expect(wrapper).toMatchSnapshot();
  });
});
