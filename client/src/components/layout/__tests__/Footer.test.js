import React from 'react'
import renderer from 'react-test-renderer'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import Footer from '../Footer'

describe('Component: Footer', () => {
  it('should match the snapshot', () => {
    const history = createMemoryHistory()
    const route = '/some-test-route'
    history.push(route)

    const snapshot = renderer
      .create(
        <Router history={history}>
          <Footer />
        </Router>
      )
      .toJSON()

    expect(snapshot).toMatchSnapshot()
  })
})
