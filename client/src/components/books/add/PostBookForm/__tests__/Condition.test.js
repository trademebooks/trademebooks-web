import React from 'react'
import renderer from 'react-test-renderer'

import Conditions from '../Conditions'

describe('Component: Conditions', () => {
  const props = {
    book: jest.fn(),
    addBook: jest.fn()
  }

  it('should match the snapshot', () => {
    const ConditionsSnapshot = renderer
      .create(<Conditions {...props} />)
      .toJSON()

    expect(ConditionsSnapshot).toMatchSnapshot()
  })
})
