import React from 'react'
import renderer from 'react-test-renderer'
import { render } from '@testing-library/react'

import PublicBookstore from '../PublicBookstore'

describe('Component: PublicBookstore', () => {
  const props = {
    match: {
      params: {
        username: 'johnny123'
      }
    },
    books: [],
    getBookstoreByUsername: jest.fn()
  }

  it('should match the snapshot', () => {
    const publicBookstoreSnapshot = renderer.create(<PublicBookstore {...props} />).toJSON()
    expect(publicBookstoreSnapshot).toMatchSnapshot()
  })

  it('should render properly', () => {
    const publicBookstore = render(<PublicBookstore {...props} />)
  })
})
