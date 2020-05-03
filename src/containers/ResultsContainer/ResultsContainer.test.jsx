import React from 'react';
import { shallow } from 'enzyme';
import ResultsContainer from './ResultsContainer';

describe('ResultsContainer component', () => {
  it('renders ResultsContainer', () => {
    const res = [{
      test: 'test'
    }];
    const wrapper = shallow(<ResultsContainer res={res} loading={false} error={''} />);
    expect(wrapper).toMatchSnapshot();
  });
});
