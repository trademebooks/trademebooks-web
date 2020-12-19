import React from 'react'
import renderer from 'react-test-renderer'

import PostBookForm from '../PostBookForm'

describe('Component: PostBookForm', () => {
  const props = {
    book: jest.fn(),
    addBook: jest.fn()
  }

  it('should match the snapshot', () => {
    const PostBookFormSnapshot = renderer
      .create(<PostBookForm {...props} />)
      .toJSON()

    expect(PostBookFormSnapshot).toMatchSnapshot()
  })
})
