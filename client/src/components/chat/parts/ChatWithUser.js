import React from 'react'

const ChatWithUser = ({ chattingWithUser }) => {
  return (
    <>
      <div className="settings-tray">
        <div className="friend-drawer no-gutters friend-drawer--grey">
          <img
            className="profile-image"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/1200px-Google_Contacts_icon.svg.png"
            alt="the profile"
          />
          <div className="text">
            <h6>
              {chattingWithUser.first_name + ' ' + chattingWithUser.last_name}
            </h6>
          </div>
        </div>
      </div>
    </>
  )
}
export default ChatWithUser
