import React, { useState, useEffect } from 'react'
import { MDBInput, MDBBtn } from 'mdbreact'
import { toastr } from 'react-redux-toastr'
import { connect } from 'react-redux'

import { getAccountSettings, saveAccountSettings } from '../../actions/account'
import { updateAuthUser } from '../../actions/user'

const BookStore = ({ auth: { user } }) => {
  const [formData, setFormData] = useState({
    username: '',
    location: '',
    school: ''
  })

  const { username, location, school } = formData

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const saveUsername = async (e) => {
    e.preventDefault()
    await updateAuthUser({ username })
    toastr.success(
      'Your username has been changed.',
      'To see your username change be taken into effect, logout then log back in.',
      { timeOut: 0 }
    )
  }

  const saveSettings = async (e) => {
    e.preventDefault()
    await saveAccountSettings({ location, school })
    toastr.success('Your settings have been updated.')
  }

  useEffect(() => {
    ;(async () => {
      const account = await getAccountSettings()
      setFormData({
        ...account,
        ...user
      })
    })()
  }, [user])

  return (
    <>
      <h3 className="mb-4 font-weight-bold">Bookstore Settings</h3>

      <div className="mt-5">
        <h4>Change Username</h4>
        <MDBInput
          label="Username"
          icon="user"
          group
          type="text"
          name="username"
          onChange={onChange}
          required
          value={username}
        />
        <MDBBtn onClick={saveUsername}>Save Changes</MDBBtn>
      </div>

      <div className="mt-5">
        <h4>Location</h4>
        <MDBInput
          label="Current Location"
          icon="map"
          group
          type="text"
          name="location"
          onChange={onChange}
          minLength="6"
          validate
          value={location}
        />
      </div>

      <div>
        <h4>School</h4>
        <MDBInput
          label="Current School"
          icon="school"
          group
          type="text"
          name="school"
          onChange={onChange}
          minLength="6"
          validate
          value={school}
        />
      </div>

      <div>
        <MDBBtn onClick={saveSettings}>Save Changes</MDBBtn>
      </div>
    </>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(BookStore)
