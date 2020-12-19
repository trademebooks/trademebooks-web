import React from 'react'
import renderer from 'react-test-renderer'

import BookFields from '../BookFields'

describe('Component: BookFields', () => {
  const props = {
    book: jest.fn(),
    addBook: jest.fn(),
    createBook: jest.fn(),
    editBook: jest.fn(),
    updateBook: jest.fn()
  }

  it('should match the snapshot', () => {
    const bookFieldsSnapshot = renderer
      .create(<BookFields {...props} />)
      .toJSON()

    expect(bookFieldsSnapshot).toMatchSnapshot()
  })
})
