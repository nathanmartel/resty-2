import React from 'react';
import { shallow } from 'enzyme';
import HistoryList from './HistoryList';

describe('HistoryList component', () => {
  it('renders HistoryList', () => {
    const wrapper = shallow(<HistoryList />);
    expect(wrapper).toMatchSnapshot();
  });
});
