import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom';
import AccountNavbar from '../AccountNavbar'

describe('Component: AccountNavbar', () => {
  const props = {
    toggleJustified: jest.fn(),
    activeItemJustified: 'user'
  }

  it('should match the snapshot', () => {
    const accountNavbarSnapshot = renderer.create(
      <MemoryRouter>
        <AccountNavbar {...props} />
      </MemoryRouter>
    ).toJSON()
    expect(accountNavbarSnapshot).toMatchSnapshot()
  })
})
