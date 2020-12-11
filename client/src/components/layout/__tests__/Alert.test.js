import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from '../../../store'
import Alert from '../Alert'

describe('Component: Alert', () => {
  it('should match the snapshot', () => {
    const snapshot = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <Alert />
        </MemoryRouter>
      </Provider>
    ).toJSON()

    expect(snapshot).toMatchSnapshot()
  })
})
