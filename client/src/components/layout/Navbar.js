import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer, MDBIcon } from 'mdbreact';
import logo from '../../img/logo.png';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  }

  const auth = (
    <MDBNavbar color="default-color" dark expand="md">
      <MDBContainer>
        <MDBNavbarBrand>
          <Link to="/">
            <img width="32px" height="44px" src={logo} alt="trademebooks logo" />
          </Link>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse isOpen={isOpen} navbar>
          <MDBNavbarNav left>
            {/* <MDBNavItem>
              <MDBNavLink to="/buy-books">
                <MDBBtn color='danger'><strong>Buy</strong></MDBBtn>
              </MDBNavLink>
            </MDBNavItem> */}
            {/* <MDBNavItem>
              <MDBNavLink to="/buy-books">
                <MDBBtn color='info'><strong>Sell</strong></MDBBtn>
              </MDBNavLink>
            </MDBNavItem> */}
          </MDBNavbarNav>

          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="/bookstores">
                <MDBIcon icon="store" />{' '}<span>Bookstore</span>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="/messages">
                <MDBIcon icon="envelope" />{' '}<span>Messages</span>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="/account">
                <MDBIcon icon="user" />{' '}<span>Account</span>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="/buy-books" onClick={logout}>
                <MDBIcon icon="sign-out-alt" />{' '}<span>Logout</span>
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );

  const guestLinks = (
    <MDBNavbar color="default-color" dark expand="md">
      <MDBContainer>
        <MDBNavbarBrand>
          <Link to="/">
            <img width="32px" height="44px" src={logo} alt="trademebooks logo" />
          </Link>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse isOpen={isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink to="/register"><strong>Register</strong></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/login"><strong>Login</strong></MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );

  return (
    <div>
      {!loading && (
        <>{isAuthenticated ? auth : guestLinks}</>
      )}
    </div>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
