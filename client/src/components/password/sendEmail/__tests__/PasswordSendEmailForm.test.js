import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'

import PasswordSendEmailForm from '../PasswordSendEmailForm'

describe('Component: PasswordSendEmailForm', () => {
  const props = {
    sendPasswordResetEmail: jest.fn()
  }

  const container = mount(<PasswordSendEmailForm {...props} />)

  it('should match the snapshot', () => {
    const passwordSendEmailFormSnapshot = renderer
      .create(<PasswordSendEmailForm {...props} />)
      .toJSON()
    expect(passwordSendEmailFormSnapshot).toMatchSnapshot()
  })

  it('should render the PasswordSendEmailForm component.', () => {
    const passwordSendEmailFormComponent = container.find(
      '.password-send-email-form'
    )
    expect(passwordSendEmailFormComponent.length).toBe(2)
  })

  it('should see the PasswordSendEmailForm component text like the header correctly.', () => {
    const passwordSendEmailFormComponent = container.find(
      '.password-send-email-form'
    )
    expect(passwordSendEmailFormComponent.find('.h2').first().text()).toBe(
      'Reset Your Password'
    )
  })

  it('should trigger a the PasswordSendEmailForm action/function when clicking on the send eamil button, in this case submitting the form.', () => {
    const passwordSendEmailFormComponent = container.find(
      '.password-send-email-form'
    )
    passwordSendEmailFormComponent.find('form').first().simulate('submit')
    expect(props.sendPasswordResetEmail).toHaveBeenCalled()
  })
})
