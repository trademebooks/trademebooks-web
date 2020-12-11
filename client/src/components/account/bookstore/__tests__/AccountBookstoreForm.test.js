import React from 'react'
import renderer from 'react-test-renderer'

import AccountBookstoreForm from '../AccountBookstoreForm'

describe('Component: AccountBookstoreForm', () => {
  const props = {
    auth: {
      user: {
        first_name: 'john',
        last_name: 'doe'
      }
    },
    getAccountSettings: jest.fn(),
    saveAccountSettings: jest.fn(),
    updateAuthUser: jest.fn()
  }

  it('should match the snapshot', () => {
    const accountBookstoreFormSnapshot = renderer.create(<AccountBookstoreForm {...props} />).toJSON()
    expect(accountBookstoreFormSnapshot).toMatchSnapshot()
  })
})
