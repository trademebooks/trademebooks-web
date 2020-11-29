import React from 'react'

const ChatSidebar = ({ users, chatWithUser }) => {
  return (
    <>
      <div className="search-box">
        <div className="input-wrapper">
          <i className="fas fa-search"></i>
          <input placeholder="Search here" type="text" />
        </div>
      </div>
      <div>
        {users.map((user) => {
          return (
            <div key={user._id}>
              <div
                className="friend-drawer friend-drawer--onhover"
                onClick={() => chatWithUser(user)}
              >
                <img
                  className="profile-image"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/1200px-Google_Contacts_icon.svg.png"
                  alt="profile"
                />
                <div className="text">
                  <h6> {user.first_name + ' ' + user.last_name}</h6>
                  <p className="text-muted">Hey, you're arrested!</p>
                </div>
                <span className="time text-muted small">13:21</span>
              </div>
              <hr />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default ChatSidebar
