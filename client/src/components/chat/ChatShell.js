import React, { useState, useEffect } from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'

import ChatSideBar from './components/ChatSidebar'
import ChatTitle from './components/ChatTitle'
import ChatMessages from './components/ChatMessages'
import ChatInput from './components/ChatInput'

import {
  getAllConversations,
  getAllMessagesInRoom
} from '../../actions/chat'

import socket from '../../utils/socket'

const ChatApp = ({
  auth: {
    user
  },
}) => {
  const [chatUsers, setChatUsers] = useState([])

  const [currentChatMessages, setCurrentChatMessages] = useState([])

  const [currentChatUser, setCurrentChatUser] = useState({})

  useEffect(() => {
    (async () => {
      const conversations = await getAllConversations()

      setChatUsers(conversations)

      if (conversations.length > 0) {
        const { room_id, user } = conversations[0]

        const messages = await getAllMessagesInRoom(room_id)

        setCurrentChatMessages(messages)

        setCurrentChatUser({ room_id, ...user })

        socket.emit('join_private_room', conversations[0])
      }
    })()

    socket.on('receive_private_message', (messageSent) => {
      setCurrentChatMessages((messages) => [...messages, messageSent])

      document.querySelector('.chat-messages').scrollBy(0, Math.max() * -1)
    })
  }, [])

  return (
    <>
      <MDBContainer className="mt-4 chat-app-container">
        <MDBRow className="justify-content-center">
          <MDBCol sm="12" md="4">
            <ChatSideBar
              chatUsers={chatUsers}
              setChatUsers={setChatUsers}
              currentChatMessages={currentChatMessages}
              setCurrentChatMessages={setCurrentChatMessages}
              setCurrentChatUser={setCurrentChatUser}
            />
          </MDBCol>
          <MDBCol sm="12" md="8">
            <div className="chat-main-content">
              <ChatTitle currentChatUser={currentChatUser} />

              <div className="chat-panel">
                <ChatMessages
                  authUser={user}
                  currentChatMessages={currentChatMessages}
                />

                <ChatInput currentChatUser={currentChatUser} />
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  )
}

export default ChatApp
