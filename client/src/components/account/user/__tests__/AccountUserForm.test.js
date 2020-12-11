import React from 'react'
import renderer from 'react-test-renderer'

import AccountUserForm from '../AccountUserForm'

describe('Component: AccountUserForm', () => {
  const props = {
    auth: {
      user: {
        first_name: 'john',
        last_name: 'doe'
      }
    },
    updateAuthUser: jest.fn()
  }

  it('should match the snapshot', () => {
    const accountUserFormSnapshot = renderer.create(<AccountUserForm {...props} />).toJSON()
    expect(accountUserFormSnapshot).toMatchSnapshot()
  })
})
