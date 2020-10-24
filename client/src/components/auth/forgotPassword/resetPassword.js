import React, { useState } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact'

import { resetPassword } from '../../../actions/password'

const ForgotPasswordForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    password_confirmation: ''
  })

  const { email, password, password_confirmation } = formData

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    resetPassword(formData)
  }

  return (
    <>
      <MDBContainer className="mt-4 login-form">
        <MDBRow className="justify-content-center">
          <MDBCol md="6">
            <form onSubmit={onSubmit}>
              <p className="h2 text-center mb-5">Reset Your Password</p>

              <div className="grey-text">
                <MDBInput
                  label="Your Email"
                  icon="envelope"
                  group
                  type="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                  required
                />
              </div>

              <div className="grey-text">
                <MDBInput
                  label="Your New Password"
                  icon="lock"
                  group
                  type="password"
                  name="password"
                  value={password}
                  onChange={onChange}
                  required
                />
              </div>

              <div className="grey-text">
                <MDBInput
                  label="Confirm Your New Password"
                  icon="lock"
                  group
                  type="password"
                  name="password_confirmation"
                  value={password_confirmation}
                  onChange={onChange}
                  required
                />
              </div>

              <div className="text-center">
                <MDBBtn type="submit" className="w-100">
                  Reset
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  )
}

export default ForgotPasswordForm
