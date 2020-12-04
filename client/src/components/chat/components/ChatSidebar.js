import React from 'react'

import { getAllMessagesInRoom } from '../../../actions/chat'

import socket from '../../../utils/socket'

const ChatSidebar = ({
  chatUsers,
  setCurrentChatMessages,
  setCurrentChatUser
}) => {
  const chatWithUserHandler = async (chatUser) => {
    const { room_id, user } = chatUser

    const messages = await getAllMessagesInRoom(room_id)

    setCurrentChatMessages(messages)

    setCurrentChatUser({ room_id, ...user })

    socket.emit('join_private_room', chatUser)
  }

  return (
    <>
      <div className="chat-sidebar-container">
        <div className="search-box">
          <div className="input-wrapper">
            <input placeholder="Search conversation here..." type="text" />
          </div>
        </div>
        <div>
          {chatUsers.map((chatUser) => {
            const { room_id, user } = chatUser

            return (
              <div key={room_id}>
                <div
                  className="friend-drawer friend-drawer--onhover"
                  onClick={() => chatWithUserHandler(chatUser)}
                >
                  <img
                    className="profile-image"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/1200px-Google_Contacts_icon.svg.png"
                    alt="profile"
                  />
                  <div className="text">
                    <h6> {user.first_name + ' ' + user.last_name}</h6>
                    <p className="text-muted">Hey, what is going!</p>
                  </div>
                  <span className="time text-muted small">13:21</span>
                </div>
                <hr />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default ChatSidebar
