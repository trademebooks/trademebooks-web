import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

import Account from '../Account'

describe('Component: Account', () => {
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
    const accountSnapshot = renderer
      .create(
        <MemoryRouter>
          <Account {...props} />
        </MemoryRouter>
      )
      .toJSON()
    expect(accountSnapshot).toMatchSnapshot()
  })
})
