import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { MDBContainer, MDBTabPane, MDBTabContent } from 'mdbreact'

import User from './user'
import BookStore from './bookstore'
import Notification from './notification'
import AccountNavbar from './accountNavbar'

const Account = ({
  auth,
  getAccountSettings,
  saveAccountSettings,
  updateAuthUser
}) => {
  const [activeItemJustified, setActiveItemJustified] = useState('1')

  const toggleJustified = (tab) => (e) => {
    if (activeItemJustified !== tab) {
      setActiveItemJustified(tab)
    }
  }

  return (
    <>
      <div className="header-container text-center">
        <h3 className="font-weight-bold">Account Settings</h3>
      </div>
      <div className="mt-4 mb-4">
        <MDBContainer>
          <AccountNavbar
            toggleJustified={toggleJustified}
            activeItemJustified={activeItemJustified}
          />

          <MDBTabContent className="mt-4" activeItem={activeItemJustified}>
            <MDBTabPane tabId="1" role="tabpanel">
              <User
                auth={auth}
                updateAuthUser={updateAuthUser}
              />
            </MDBTabPane>

            <MDBTabPane tabId="2" role="tabpanel">
              <BookStore
                auth={auth}
                getAccountSettings={getAccountSettings}
                saveAccountSettings={saveAccountSettings}
                updateAuthUser={updateAuthUser}
              />
            </MDBTabPane>

            <MDBTabPane tabId="3" role="tabpanel">
              <Notification
                getAccountSettings={getAccountSettings}
                saveAccountSettings={saveAccountSettings}
              />
            </MDBTabPane>
          </MDBTabContent>
        </MDBContainer>
      </div>
    </>
  )
}

Account.propTypes = {
  auth: PropTypes.object.isRequired,
  getAccountSettings: PropTypes.func.isRequired,
  saveAccountSettings: PropTypes.func.isRequired,
  updateAuthUser: PropTypes.func.isRequired,
}

export default Account
