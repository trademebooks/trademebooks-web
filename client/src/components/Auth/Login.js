import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/buy-books" />;
  }

  return (
    <>
      <MDBContainer className="mt-4">
        <MDBRow className='justify-content-center'>
          <MDBCol md="6">
            <form onSubmit={onSubmit}>
              <p className="h2 text-center mb-5">Login</p>

              <div className="grey-text">
                <MDBInput
                  label="Type your email"
                  icon="envelope"
                  group
                  type="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                  required
                />

                <MDBInput
                  label="Type your password"
                  icon="lock"
                  group
                  type="password"
                  name="password"
                  value={password}
                  onChange={onChange}
                  minLength="6"
                />
              </div>

              <div className="text-center">
                <MDBBtn type="submit">Login</MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
