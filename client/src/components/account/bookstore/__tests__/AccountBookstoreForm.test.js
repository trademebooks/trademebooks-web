import React from 'react'
import renderer from 'react-test-renderer'
import { render, act } from '@testing-library/react'

import AccountBookstoreForm from '../AccountBookstoreForm'

describe('Component: AccountBookstoreForm', () => {
  const promise = Promise.resolve()

  const props = {
    auth: {
      user: {
        first_name: 'john',
        last_name: 'doe'
      }
    },
    getAccountSettings: jest.fn(() => {
      return promise
    }),
    saveAccountSettings: jest.fn(() => {
      return promise
    }),
    updateAuthUser: jest.fn(() => {
      return promise
    })
  }

  it('should match the snapshot', () => {
    const accountBookstoreFormSnapshot = renderer
      .create(<AccountBookstoreForm {...props} />)
      .toJSON()
    expect(accountBookstoreFormSnapshot).toMatchSnapshot()
  })

  it('should render properly', async () => {
    const accountBookstoreForm = render(<AccountBookstoreForm {...props} />)

    // got rid of act warning: https://kentcdodds.com/blog/fix-the-not-wrapped-in-act-warning
    await act(() => {
      return promise
    })
  })
})
