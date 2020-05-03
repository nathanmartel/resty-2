import React from 'react';
import { shallow } from 'enzyme';
import RequestForm from './RequestForm';

describe('RequestForm component', () => {
  it('renders RequestForm', () => {
    const wrapper = shallow(<RequestForm
      url={'www.test.com'} 
      method={'GET'} 
      body={'{ test: "test" }'}
      onUrlChange={() => {}}
      onMethodChange={() => {}}
      onBodyChange={() => {}}
      authType={'none'}
      authUsername={''}
      authPassword={''}
      authToken={''}
      authUsernamePlaceholder={'Username'}
      authPasswordPlaceholder={'Password'}
      authTokenPlaceholder={'Token'}
      onAuthTypeChange={() => {}}
      onAuthUsernameChange={() => {}}
      onAuthPasswordChange={() => {}}
      onAuthTokenChange={() => {}}
      onSubmit={() => {}}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
