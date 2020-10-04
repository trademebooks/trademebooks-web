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

const Footer = () => {
  /*
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
  */

  const footer = () => {
    return (
      <div>
        <h1>HI</h1>
      </div>
    );
  };

  return footer;
};

// Footer.propTypes = {
//   auth: PropTypes.object.isRequired,
// };

// const mapStateToProps = (state) => ({
//   auth: state.auth,
// });

// export default connect(mapStateToProps, { logout })(Footer);

export default Footer;
