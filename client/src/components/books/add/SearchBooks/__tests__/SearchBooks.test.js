import React from 'react'
import renderer from 'react-test-renderer'

import SearchBooks from '../SearchBooks'

describe('Component: SearchBooks', () => {
  const props = {
    addBook: jest.fn()
  }

  it('should match the snapshot', () => {
    const SearchBooksSnapshot = renderer
      .create(<SearchBooks {...props} />)
      .toJSON()

    expect(SearchBooksSnapshot).toMatchSnapshot()
  })
})
