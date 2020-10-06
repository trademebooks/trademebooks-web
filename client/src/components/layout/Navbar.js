import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
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
} from 'mdbreact';
import logo from '../../img/logo.png';

const Navbar = ({ auth: { isAuthenticated, loading, user }, logout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [bookstoreUrl, setBookstoreUrl] = useState('');
  const [fullname, setFullname] = useState('');

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (user) {
      setBookstoreUrl(`/bookstore/${user.username}`);
      setFullname(`${user.first_name} ${user.last_name}`);
    }
  }, [user]);

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
              <span className="color-white">{`Hello ${fullname}!`}</span>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            {/* <MDBNavItem>
              <MDBNavLink to="/about">
                <MDBIcon icon="home" /> <span>About Us</span>
              </MDBNavLink>
            </MDBNavItem> */}
            <MDBNavItem>
              <MDBNavLink to="/add-book">
                <MDBIcon icon="book" /> <span>Sell Books</span>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                className="waves-effect waves-light"
                to={bookstoreUrl}
              >
                <MDBIcon icon="store" /> <span>Bookstore</span>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="/messages">
                <MDBIcon icon="envelope" /> <span>Messages</span>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="/account">
                <MDBIcon icon="user" /> <span>Account</span>
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
  );

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
  );

  return !loading && <>{isAuthenticated ? authNavbar : guestNavbar}</>;
};

Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
