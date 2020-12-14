import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'

import LoginForm from '../LoginForm'

describe('Component: Login', () => {
  const props = {
    isAuthenticated: false,
    login: jest.fn()
  }

  const container = mount(<LoginForm {...props} />)

  it('should match the snapshot', () => {
    const loginFormSnapshot = renderer.create(<LoginForm {...props} />).toJSON()
    expect(loginFormSnapshot).toMatchSnapshot()
  })

  it('should render the Login component.', () => {
    const loginFormComponent = container.find('.login-form')
    expect(loginFormComponent.length).toBe(2)
  })

  it('should see the Login component text like the header correctly.', () => {
    const loginFormComponent = container.find('.login-form')
    expect(loginFormComponent.find('.h2').first().text()).toBe('Login')
  })

  it('should trigger a the login action/function when clicking on the login button, in this case submitting the form.', () => {
    const loginFormComponent = container.find('.login-form')
    loginFormComponent.find('form').first().simulate('submit')
    expect(props.login).toHaveBeenCalled()
  })
})
