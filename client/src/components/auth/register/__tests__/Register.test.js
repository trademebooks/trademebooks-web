import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'

import RegisterForm from '../RegisterForm'

describe('Component: Register', () => {
  const props = {
    isAuthenticated: false,
    register: jest.fn()
  }

  const container = mount(<RegisterForm {...props} />)

  it('should match the snapshot', () => {
    const loginFormSnapshot = renderer.create(<RegisterForm {...props} />).toJSON()
    expect(loginFormSnapshot).toMatchSnapshot()
  })

  it('should render the Register component.', () => {
    const registerComponent = container.find('.register-form')
    expect(registerComponent.length).toBe(2)
  })

  it('should see the register component text like the header correctly.', () => {
    const registerComponent = container.find('.register-form')
    expect(registerComponent.find('.h2').first().text()).toBe('Register')
  })

  it('should trigger a the register action/function when clicking on the register button, in this case submitting the form.', () => {
    const registerComponent = container.find('.register-form')
    registerComponent.find('form').first().simulate('submit')
    expect(props.register).toHaveBeenCalled()
  })
})
