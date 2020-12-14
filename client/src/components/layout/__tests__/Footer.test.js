import React from 'react'
import renderer from 'react-test-renderer'

import Footer from '../Footer'

describe('Component: Footer', () => {
  it('should match the snapshot', () => {
    const snapshot = renderer.create(<Footer />).toJSON()

    expect(snapshot).toMatchSnapshot()
  })
})
