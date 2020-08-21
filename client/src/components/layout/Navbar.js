import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { logout } from '../../actions/auth';

import logo from '../../img/logo.png';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to='/bookstore'>
          <i className='fas fa-store' />{' '}
          <span className='hide-sm'>Bookstore</span>
        </Link>
      </li>
      <li>
        <Link to='/messages'>
          <i className='fas fa-envelope' />{' '}
          <span className='hide-sm'>Messages</span>
        </Link>
      </li>
      <li>
        <Link to='/account'>
          <i className='fas fa-user' />{' '}
          <span className='hide-sm'>Settings</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href='#!'>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className='navbar bg-primary'>
      <h1>
        <Link to="/">
          <img className="logo" src={logo} alt="trademebooks logo" />
        </Link>
      </h1>
      {!loading && (
        <>{isAuthenticated ? authLinks : guestLinks}</>
      )}
    </nav>
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
