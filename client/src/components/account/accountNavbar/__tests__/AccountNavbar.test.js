import React from 'react'
import renderer from 'react-test-renderer'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import AccountNavbar from '../AccountNavbar'

describe('Component: AccountNavbar', () => {
  const props = {
    toggleJustified: jest.fn(),
    activeItemJustified: '1'
  }

  it('should match the snapshot', () => {
    const accountNavbarSnapshot = renderer
      .create(
        <MemoryRouter>
          <AccountNavbar {...props} />
        </MemoryRouter>
      )
      .toJSON()
    expect(accountNavbarSnapshot).toMatchSnapshot()
  })

  it('should render properly', () => {
    const accountNavbar = render(
      <MemoryRouter>
        <AccountNavbar {...props} />
      </MemoryRouter>
    )
  })
})
