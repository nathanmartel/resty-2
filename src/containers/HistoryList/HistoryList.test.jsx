import React from 'react';
import { shallow } from 'enzyme';
import HistoryList from './HistoryList';

describe('HistoryList component', () => {
  it('renders HistoryList', () => {
    const wrapper = shallow(<HistoryList 
      history={[{
        authPassword: '',
        authToken: '',
        authType: '',
        authUsername: '',
        body: '',
        method: 'GET',
        url: 'http://jsonplaceholder.typicode.com/posts/5',
      }]} 
      onLoadHistoryItemClick={() => {}} 
      onClearHistoryClick={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
