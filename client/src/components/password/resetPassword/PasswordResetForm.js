import React, { useState } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact'
import { useParams } from 'react-router'
import { toastr } from 'react-redux-toastr'

const PasswordResetForm = ({
  resetPassword
}) => {
  const { token } = useParams()

  const [formData, setFormData] = useState({
    email: '',
    newPassword: ''
  })

  const { email, newPassword } = formData

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    const response = await resetPassword({
      ...formData,
      token
    })

    if (response) {
      toastr.success('Your password has been successfully reset.')

      setFormData({ email: '', newPassword: '' })
    }
  }

  return (
    <>
      <MDBContainer className="mt-4 password-reset-form">
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
                  name="newPassword"
                  value={newPassword}
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

export default PasswordResetForm
