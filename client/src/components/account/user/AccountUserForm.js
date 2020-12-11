import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { MDBInput, MDBBtn } from 'mdbreact'
import { toastr } from 'react-redux-toastr'

const AccountUserForm = ({
  auth: {
    user
  },
  updateAuthUser
}) => {
  const [formData, setFormData] = useState({
    first_name: user.first_name,
    last_name: user.last_name
  })

  const { first_name, last_name } = formData

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const updateUser = async (e) => {
    e.preventDefault()

    const response = await updateAuthUser({ first_name, last_name })

    if (response) {
      toastr.success(
        'Your name has been changed.',
        'To see your name change be taken into effect, logout then log back in.',
        { timeOut: 0 }
      )
    }
  }

  return (
    <>
      <h3 className="mb-4 font-weight-bold">User Settings</h3>
      <div className="mt-5">
        <h4>Change Name</h4>
        <MDBInput
          label="First Name"
          icon="user"
          group
          type="text"
          name="first_name"
          onChange={onChange}
          required
          value={first_name}
        />
        <MDBInput
          label="Last Name"
          icon="user"
          group
          type="text"
          name="last_name"
          onChange={onChange}
          required
          value={last_name}
        />
        <MDBBtn onClick={updateUser}>Save Changes</MDBBtn>
      </div>
    </>
  )
}

AccountUserForm.propTypes = {
  auth: PropTypes.object.isRequired,
  updateAuthUser: PropTypes.func.isRequired
}

export default AccountUserForm
