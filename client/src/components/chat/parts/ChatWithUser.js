import React from 'react'

const ChatWithUser = ({ chattingWithUser }) => {
  return (
    <>
      <div className="settings-tray">
        <div className="friend-drawer no-gutters friend-drawer--grey">
          <img
            className="profile-image"
            src="https://www.clarity-enhanced.net/wp-content/uploads/2020/06/robocop.jpg"
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
