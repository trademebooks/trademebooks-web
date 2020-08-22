import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

const Register = ({ setAlert, register, isAuthenticated }) => {

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: '',
    username: ''
  });

  // const [formData, setFormData] = useState({
  //   first_name: 'yichen',
  //   last_name: 'zhu',
  //   email: 'yichenzhu1337@gmail.com',
  //   password: 'yichen',
  //   password_confirmation: 'yichen',
  //   username: 'yichen'
  // });

  const { first_name, last_name, email, password, password_confirmation, username } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password_confirmation) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ first_name, last_name, username, email, password, password_confirmation, username });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/buy-books" />;
  }

  return (
    <>
      <MDBContainer className="mt-4">
        <MDBRow className='justify-content-center'>
          <MDBCol md="6">
            <form>
              <p className="h2 text-center mb-4">Register</p>

              <div className="grey-text">
                <MDBInput label="First Name" icon="user" group type="text" onChange={onChange} name="first_name" value={first_name} />
                <MDBInput label="Last Name" icon="user" group type="text" onChange={onChange} name="last_name" value={last_name} />
                <MDBInput label="Your Email" icon="envelope" group type="email" onChange={onChange} name="email" value={email} />
                <MDBInput label="Your Password" icon="lock" group type="password" onChange={onChange} name="password" value={password} />
                <MDBInput label="Confirm Your Password" icon="lock" group type="password" onChange={onChange} name="password_confirmation" value={password_confirmation} />
                <MDBInput label="Desired Username" icon="user-circle" group type="text" onChange={onChange} name="username" value={username} />
              </div>

              <div className="text-center">
                <MDBBtn onClick={onSubmit}>Register</MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
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
