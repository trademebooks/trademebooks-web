import React from 'react'
import renderer from 'react-test-renderer'
import { render, act } from '@testing-library/react'

import AccountUserForm from '../AccountUserForm'

describe('Component: AccountUserForm', () => {
  const promise = Promise.resolve()

  const props = {
    auth: {
      user: {
        first_name: 'john',
        last_name: 'doe'
      }
    },
    updateAuthUser: jest.fn(() => {
      return promise
    })
  }

  it('should match the snapshot', () => {
    const accountUserFormSnapshot = renderer
      .create(<AccountUserForm {...props} />)
      .toJSON()
    expect(accountUserFormSnapshot).toMatchSnapshot()
  })

  it('should render properly', async () => {
    render(<AccountUserForm {...props} />)

    // got rid of act warning: https://kentcdodds.com/blog/fix-the-not-wrapped-in-act-warning
    await act(() => {
      return promise
    })
  })
})
