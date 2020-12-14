import React from 'react'
import PropTypes from 'prop-types'
import { MDBNav, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact'

const AccountNavbar = ({ toggleJustified, activeItemJustified }) => {
  return (
    <>
      <MDBNav tabs className="border-bottom" color="indigo">
        <MDBNavItem>
          <MDBNavLink
            to="#"
            active={activeItemJustified === '1'}
            onClick={toggleJustified('1')}
            role="tab"
          >
            <MDBIcon icon="user" /> User
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink
            to="#"
            active={activeItemJustified === '2'}
            onClick={toggleJustified('2')}
            role="tab"
          >
            <MDBIcon icon="store" /> Bookstore
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink
            to="#"
            active={activeItemJustified === '3'}
            onClick={toggleJustified('3')}
            role="tab"
          >
            <MDBIcon icon="envelope" /> Notifications
          </MDBNavLink>
        </MDBNavItem>
      </MDBNav>
    </>
  )
}

AccountNavbar.propTypes = {
  toggleJustified: PropTypes.func.isRequired,
  activeItemJustified: PropTypes.string.isRequired
}

export default AccountNavbar
