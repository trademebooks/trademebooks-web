import React from 'react'
import renderer from 'react-test-renderer'

import AccountNotificationForm from '../AccountNotificationForm'

describe('Component: AccountNotificationForm', () => {
  const props = {
    getAccountSettings: jest.fn(),
    saveAccountSettings: jest.fn()
  }

  it('should match the snapshot', () => {
    const accountNotificationFormSnapshot = renderer.create(<AccountNotificationForm {...props} />).toJSON()
    expect(accountNotificationFormSnapshot).toMatchSnapshot()
  })
})
