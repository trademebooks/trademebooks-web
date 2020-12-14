import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBIcon
} from 'mdbreact'
import { toastr } from 'react-redux-toastr'

import redirect from '../../../utils/redirect'

const RegisterForm = ({ register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    username: '',
    password: '',
    password_confirmation: ''
  })

  const {
    first_name,
    last_name,
    email,
    password,
    password_confirmation,
    username
  } = formData

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    if (password !== password_confirmation) {
      toastr.error('Passwords do not match')
    } else {
      const response = await register({
        first_name,
        last_name,
        username,
        email,
        password,
        password_confirmation
      })

      if (response) {
        setFormData({
          first_name: '',
          last_name: '',
          email: '',
          username: '',
          password: '',
          password_confirmation: ''
        })

        toastr.success('You have successfully registered! Try logging in now!')

        redirect('/login')
      }
    }
  }

  if (isAuthenticated) {
    return <Redirect to="/buy-books" />
  }

  return (
    <>
      <MDBContainer className="mt-4 register-form">
        <MDBRow className="justify-content-center">
          <MDBCol md="6">
            <form onSubmit={onSubmit}>
              <p className="h2 text-center mb-4">Register</p>

              <div className="grey-text">
                <MDBInput
                  label="First Name"
                  icon="user"
                  group
                  type="text"
                  onChange={onChange}
                  name="first_name"
                  value={first_name}
                />
                <MDBInput
                  label="Last Name"
                  icon="user"
                  group
                  type="text"
                  onChange={onChange}
                  name="last_name"
                  value={last_name}
                />
                <MDBInput
                  label="Your Email"
                  icon="envelope"
                  group
                  type="email"
                  onChange={onChange}
                  name="email"
                  value={email}
                />
                <MDBInput
                  label="Your Password"
                  icon="lock"
                  group
                  type="password"
                  onChange={onChange}
                  name="password"
                  value={password}
                />
                <MDBInput
                  label="Confirm Your Password"
                  icon="lock"
                  group
                  type="password"
                  onChange={onChange}
                  name="password_confirmation"
                  value={password_confirmation}
                />
                <MDBInput
                  label="Desired Username"
                  icon="user-circle"
                  group
                  type="text"
                  onChange={onChange}
                  name="username"
                  value={username}
                />
              </div>

              <div className="text-center">
                <MDBBtn type="submit" className="w-100">
                  Register
                </MDBBtn>
              </div>

              <p className="h2 text-center mt-5">Register With Social</p>

              <MDBRow>
                <MDBCol md="12">
                  <div className="text-center my-2">
                    <MDBBtn
                      href="/api/v1/passport/auth/google"
                      size="lg"
                      tag="a"
                      social="gplus"
                      color="danger"
                      rounded
                    >
                      <MDBIcon fab icon="google" />
                    </MDBBtn>
                    <MDBBtn
                      href="/api/v1/passport/auth/facebook"
                      size="lg"
                      tag="a"
                      social="fb"
                      color="primary"
                      rounded
                    >
                      <MDBIcon fab icon="facebook-f" />
                    </MDBBtn>
                    <MDBBtn
                      href="/api/v1/passport/auth/twitter"
                      size="lg"
                      tag="a"
                      social="tw"
                      color="info"
                      rounded
                    >
                      <MDBIcon fab icon="twitter" />
                    </MDBBtn>
                  </div>
                </MDBCol>
              </MDBRow>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  )
}

RegisterForm.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

export default RegisterForm
