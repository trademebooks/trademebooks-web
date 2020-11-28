import React, { useState, useEffect } from 'react'
import { MDBBtn } from 'mdbreact'
import { toastr } from 'react-redux-toastr'

import { getAccountSettings, saveAccountSettings } from '../../actions/account'

const Notifications = () => {
  const [formData, setFormData] = useState({
    receiveEmail: false,
    receiveSms: false
  })

  const { receiveEmail, receiveSms } = formData

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.checked })
  }

  const saveSettings = async (e) => {
    e.preventDefault()
    await saveAccountSettings(formData)
    toastr.success('Your settings have been updated.')
  }

  useEffect(() => {
    ;(async () => {
      const account = await getAccountSettings()
      setFormData(account)
    })()
  }, [])

  return (
    <>
      <h3 className="mb-4 font-weight-bold">Notifications Settings</h3>

      <div className="custom-control custom-checkbox my-3">
        <input
          type="checkbox"
          name="receiveEmail"
          className="custom-control-input"
          id="defaultInline1"
          checked={receiveEmail}
          onChange={onChange}
        />
        <label className="custom-control-label" htmlFor="defaultInline1">
          Receive Emails
        </label>
      </div>

      <div className="custom-control custom-checkbox my-3">
        <input
          type="checkbox"
          name="receiveSms"
          className="custom-control-input"
          id="defaultInline2"
          checked={receiveSms}
          onChange={onChange}
        />
        <label className="custom-control-label" htmlFor="defaultInline2">
          Receive Text Messages
        </label>
      </div>

      <div>
        <MDBBtn onClick={saveSettings}>Save Changes</MDBBtn>
      </div>
    </>
  )
}

export default Notifications
