import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    first_name: 'yichen',
    last_name: 'zhu',
    username: 'yichen',
    email: 'yichenzhu1337@gmail.com',
    password: 'yichen',
    password_confirmation: 'yichen'
  });

  const { first_name, last_name, username, email, password, password_confirmation } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password_confirmation) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ first_name, last_name, username, email, password, password_confirmation });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/buy-books" />;
  }

  return (
    <Fragment>
      <div className="col-sm-6">
        <h1 className="large text-primary">Sign Up</h1>
        <p className="lead">
          <i className="fas fa-user" /> Create Your Account
      </p>
        <form className="form" onSubmit={onSubmit}>

          {/* First Name */}
          <div className="form-group">
            <input
              type="text"
              placeholder="First Name"
              name="first_name"
              value={first_name}
              onChange={onChange}
            />
          </div>

          {/* Last Name */}
          <div className="form-group">
            <input
              type="text"
              placeholder="Last Name"
              name="last_name"
              value={last_name}
              onChange={onChange}
            />
          </div>

          {/* Username */}
          <div className="form-group">
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={username}
              onChange={onChange}
            />
            <small className="form-text">
              This will be your bookstore profile name, you can change it any time you want.
          </small>
          </div>

          {/* Email */}
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={onChange}
            />
          </div>

          {/* Password */}
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onChange}
            />
          </div>

          {/* Password Confirmation */}
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password_confirmation"
              value={password_confirmation}
              onChange={onChange}
            />
          </div>

          <input type="submit" className="btn btn-primary" value="Register" />
        </form>
        <p className="my-1">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </div>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);
