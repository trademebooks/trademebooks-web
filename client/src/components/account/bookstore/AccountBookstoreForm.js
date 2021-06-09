import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { MDBInput, MDBBtn, MDBIcon} from 'mdbreact'
import { toastr } from 'react-redux-toastr'
import GoogleMaps from '../LocationSearch'

const AccountBookStoreForm = ({
  auth: { user },
  getAccountSettings,
  saveAccountSettings,
  updateAuthUser
}) => {
  const [formData, setFormData] = useState({
    username: '',
    location: '',
    school: ''
  })

  const { username, location, school } = formData
  
  const handleSelect = (value) =>{
    if(value != null){
      setFormData({...formData, "location":value.description})
    }
  }

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const saveUsername = async (e) => {
    e.preventDefault()

    const response = await updateAuthUser({ username })

    if (response) {
      toastr.success(
        'Your username has been changed.',
        'To see your username change be taken into effect, logout then log back in.',
        { timeOut: 0 }
      )
    }
  }

  const saveSettings = async (e) => {
    e.preventDefault()

    const response = await saveAccountSettings({ location, school })

    if (response) {
      toastr.success('Your settings have been updated.')
    }
  }

  useEffect(() => {
    ;(async () => {
      const account = await getAccountSettings()

      setFormData({
        ...account,
        ...user
      })
    })()
  }, [user, getAccountSettings])

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
        <div className="d-flex flex-row">
          <MDBIcon size="2x" icon = "map" className="mt-3 pr-2" />
          <GoogleMaps handleChange={handleSelect} placeholder={formData.location} className="w-100"/>
        </div>
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

AccountBookStoreForm.propTypes = {
  auth: PropTypes.object.isRequired,
  getAccountSettings: PropTypes.func.isRequired,
  saveAccountSettings: PropTypes.func.isRequired,
  updateAuthUser: PropTypes.func.isRequired
}

export default AccountBookStoreForm
