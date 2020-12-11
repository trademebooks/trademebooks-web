import React from 'react'
import renderer from 'react-test-renderer'

import Spinner from '../Spinner'

describe('Component: Spinner', () => {
  it('should match the snapshot', () => {
    const snapshot = renderer.create(<Spinner />).toJSON()

    expect(snapshot).toMatchSnapshot()
  })
})
