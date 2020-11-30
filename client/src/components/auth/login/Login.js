import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon, Link } from 'mdbreact'

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const { email, password } = formData

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    login(email, password)
  }

  if (isAuthenticated) {
    return <Redirect to="/buy-books" />
  }

  return (
    <>
      <MDBContainer className="mt-4 login-form">
        <MDBRow className="justify-content-center">
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

              <div>
                <div className="text-right">
                  <Link to="/forgot-password">
                    <strong>Forgot Your Password?</strong>
                  </Link>
                </div>
                <div className="text-center">
                  <MDBBtn type="submit" className="w-100">
                    Login
                  </MDBBtn>
                </div>
              </div>

              <MDBRow>
                <MDBCol md="12">
                  <div className="text-center mt-4">
                    <MDBBtn size="lg" tag="a" floating social="fb" color="primary" rounded>
                      <MDBIcon fab icon="facebook-f" />
                    </MDBBtn>
                    <MDBBtn size="lg" tag="a" floating social="tw" color="info" rounded>
                      <MDBIcon fab icon="twitter" />
                    </MDBBtn>
                    <MDBBtn href="/api/v1/passport/auth/google" size="lg" tag="a" floating social="gplus" color="danger"
                      rounded>
                      <MDBIcon fab icon="google" />
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

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

export default Login
