import React, { useState } from 'react'
import { MDBInput, MDBBtn } from 'mdbreact'
import { toastr } from 'react-redux-toastr'
import { connect } from 'react-redux'

import { updateAuthUser } from '../../actions/user'

const User = ({ auth: { user } }) => {
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
    await updateAuthUser({ first_name, last_name })
    toastr.success(
      'Your name has been changed.',
      'To see your name change be taken into effect, logout then log back in.',
      { timeOut: 0 }
    )
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

const mapStateToProps = (state) => ({
  auth: state.auth
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(User)
