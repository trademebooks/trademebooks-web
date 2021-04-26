import React from 'react'
import renderer from 'react-test-renderer'
import { render } from '@testing-library/react'

import AuthBookstore from '../AuthBookstore'

describe('Component: AuthBookstore', () => {
  const props = {
    auth: {
      user: {
        username: 'johndoe'
      }
    },
    books: [],
    getBookstoreByUsername: jest.fn()
  }

  it('should match the snapshot', () => {
    const authBookstoreSnapshot = renderer
      .create(<AuthBookstore {...props} />)
      .toJSON()
    expect(authBookstoreSnapshot).toMatchSnapshot()
  })

  it('should render properly', () => {
    const authBookstore = render(<AuthBookstore {...props} />)
  })
})
