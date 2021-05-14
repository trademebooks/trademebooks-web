import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../actions/auth'
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer,
  MDBIcon,
  MDBBadge
} from 'mdbreact'
import logo from './logo.png'

import { getConversations } from '../chat/Services/chatService'

const Navbar = ({ auth: { isAuthenticated, loading, user }, logout }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [fullname, setFullname] = useState('')
  const [unreadMessagesCount, setUnreadMessagesCount] = useState(0)

  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (user) {
      setFullname(`${user.first_name} ${user.last_name}`)
    }
  }, [user])

  useEffect(() => {
    setInterval(async () => {
      if (user) {
        ;(async () => {
          const conversations = await getConversations()

          const x = conversations.map((x) => {
            return {
              lastMessageIsRead: x.lastMessageIsRead,
              lastMessageSenderId: x.lastMessageSenderId
            }
          })

          let numberOfUnreadMessages = 0
          for (const conversation of x) {
            if (
              !conversation.lastMessageIsRead &&
              user._id !== conversation.lastMessageSenderId
            ) {
              numberOfUnreadMessages++
            }
          }

          setUnreadMessagesCount(numberOfUnreadMessages)
        })()
      }
    }, 2000)
  }, [user])

  useEffect(() => {
    // When the user clicks anywhere on the screen while the navbar is open, we toggle (hide) it.
    document.addEventListener('click', () => {
      if (
        Array.from(
          document.querySelector('[data-test="collapse"]').classList
        ).includes('show')
      ) {
        setIsOpen(false)
      }
    })
  }, [])

  const authNavbar = (
    <MDBNavbar color="default-color" dark expand="md">
      <MDBContainer>
        <MDBNavbarBrand>
          <Link to="/">
            <img
              width="32px"
              height="44px"
              src={logo}
              alt="trademebooks logo"
            />
          </Link>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse isOpen={isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
              <span className="color-white">
                Hello <strong>{fullname}</strong>!
              </span>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink to="/add-book">
                <MDBIcon icon="book" /> <span>Sell Books</span>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                className="waves-effect waves-light"
                to="/my-bookstore"
              >
                <MDBIcon icon="store" /> <span>My Bookstore</span>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="/chat">
                <MDBIcon icon="envelope" /> Messages
                {unreadMessagesCount > 0 ? (
                  <MDBBadge color="danger" className="ml-1">
                    NEW
                  </MDBBadge>
                ) : (
                  ''
                )}
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="/account">
                <MDBIcon icon="user" /> Account
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                className="waves-effect waves-light"
                to="/buy-books"
                onClick={logout}
              >
                <MDBIcon icon="sign-out-alt" /> <span>Logout</span>
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  )

  const guestNavbar = (
    <MDBNavbar color="default-color" dark expand="md">
      <MDBContainer>
        <MDBNavbarBrand>
          <Link to="/">
            <img
              width="32px"
              height="44px"
              src={logo}
              alt="trademebooks logo"
            />
          </Link>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse isOpen={isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink to="/register">
                <strong>Register</strong>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/login">
                <strong>Login</strong>
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  )

  return !loading && <>{isAuthenticated ? authNavbar : guestNavbar}</>
}

Navbar.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logout })(Navbar)
