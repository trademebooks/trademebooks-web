import React from 'react'

const ChatSidebar = ({ users, chatWithUser }) => {


  return (
    <>
      <div>
        <h2>List of Users SideBar</h2>

        <ul>
          {
            users.map(user => {
              return (
                <li key={user._id}><button onClick={() => chatWithUser(user)}>{user.first_name + ' ' + user.last_name}</button></li>
              )
            })
          }
        </ul>
      </div>
    </>
  )
}

export default ChatSidebar
