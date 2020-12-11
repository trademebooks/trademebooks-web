import React from 'react'
import renderer from 'react-test-renderer'
import { render, act } from '@testing-library/react'

import AccountNotificationForm from '../AccountNotificationForm'

describe('Component: AccountNotificationForm', () => {
  const promise = Promise.resolve({
    receiveEmail: false,
    receiveSms: false
  })

  const props = {
    getAccountSettings: jest.fn(() => { return promise }),
    saveAccountSettings: jest.fn(() => { return promise })
  }

  it('should match the snapshot', () => {
    const accountNotificationFormSnapshot = renderer.create(<AccountNotificationForm {...props} />).toJSON()
    expect(accountNotificationFormSnapshot).toMatchSnapshot()
  })

  it('should render properly', async () => {
    const accountNotificationForm = render(<AccountNotificationForm {...props} />)

    // got rid of act warning: https://kentcdodds.com/blog/fix-the-not-wrapped-in-act-warning
    await act(() => { return promise })
  })
})
