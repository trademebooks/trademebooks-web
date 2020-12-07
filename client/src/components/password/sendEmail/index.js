import React, { useState } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact'
import { toastr } from 'react-redux-toastr'

import { sendPasswordResetEmail } from '../../../actions/password'

const ForgotPasswordForm = () => {
  const [formData, setFormData] = useState({
    email: ''
  })

  const { email } = formData

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onSubmit =async (e) => {
    e.preventDefault()

    const response = await sendPasswordResetEmail({ email })

    if (response) {
      toastr.success(`A password reset email has been sent.`)

      setFormData({ email: '' })
    }
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
                  label="Type in your email"
                  icon="envelope"
                  group
                  type="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                  required
                />
              </div>

              <div className="text-center">
                <MDBBtn type="submit" className="w-100">
                  Send Email
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
