import React from 'react'
import { configure, mount } from 'enzyme'
import Login from '../Login';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Component: Login', () => {
  const props = {
    isAuthenticated: false,
    login: jest.fn()
  }

  const container = mount(<Login {...props} />)

  it('should render the Login component.', () => {
    const loginComponent = container.find('.login-form');
    expect(loginComponent.length).toBe(2);
  });

  it('should see the Login component text like the header correctly.', () => {
    const loginComponent = container.find('.login-form');
    expect(loginComponent.find('.h2').first().text()).toBe('Login');
  });

  it('should trigger a the login action/function when clicking on the login button, in this case submitting the form.', () => {
    const loginComponent = container.find('.login-form');
    loginComponent.find('form').first().simulate('submit');
    expect(props.login).toHaveBeenCalled();
  });
})
