import React from 'react'
import { configure, mount } from 'enzyme'
import Register from '../Register'

import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

describe('Component: Register', () => {
  const props = {
    isAuthenticated: false,
    register: jest.fn()
  }

  const container = mount(<Register {...props} />)

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
