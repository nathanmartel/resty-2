import React from 'react';
import { shallow } from 'enzyme';
import HistoryItem from './HistoryItem';

describe('HistoryItem component', () => {
  it('renders HistoryItem', () => {
    const wrapper = shallow(<HistoryItem 
      method={'GET'}
      url={'http://www.test.com'}
      index={1}
      onLoadHistoryItemClick={() => {}} 
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
