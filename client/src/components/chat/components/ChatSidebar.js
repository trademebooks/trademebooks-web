import React, { useEffect, useState } from 'react'

import api from '../../../utils/api'
import socket from '../../../utils/socket'

const ChatSidebar = ({
  chatUsers,
  setChatUsers,
  messages,
  setMessages
}) => {

  useEffect(() => {
    ; (async () => {
      try {
        const response = await api.get(`/messages/conversations`)
        const responseJson = response.data.data
        const conversations = responseJson

        setChatUsers(conversations)
      }
      catch (error) {
        console.log({ error })
      }
    })()

    // socket.on('receive_private_message', (messageSent) => {
    //   document.querySelector('.chat-messages').scrollBy(0, 99999)
    // })
  }, [])

  const chatWithUser = async (chatUser) => {
    const { room_id, user } = chatUser

    try {
      const response = await api.get(`/messages/${room_id}`)
      const responseJson = response.data.data
      const messages = responseJson

      setMessages(messages)
    }
    catch (error) {
      console.log({ error })
    }

    // socket.emit('join_private_room', user)
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
                <div className="friend-drawer friend-drawer--onhover" onClick={() => chatWithUser(chatUser)}>
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
