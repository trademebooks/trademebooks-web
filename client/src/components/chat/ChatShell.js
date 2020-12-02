import React, { useState } from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'

import ChatSideBar from './components/ChatSidebar'
import ChatTitle from './components/ChatTitle'
import ChatMessages from './components/ChatMessages'
import ChatInput from './components/ChatInput'

const ChatApp = ({

}) => {
  const [chatUsers, setChatUsers] = useState([])

  const [messages, setMessages] = useState([])

  return (
    <>
      <MDBContainer className="mt-4 chat-app-container">
        <MDBRow className="justify-content-center">
          <MDBCol sm="12" md="4">
            <ChatSideBar
              chatUsers={chatUsers}
              setChatUsers={setChatUsers}
              messages={messages}
              setMessages={setMessages}
            />
          </MDBCol>
          <MDBCol sm="12" md="8">
            <div className="chat-main-content">
              <ChatTitle chatUsers={chatUsers} setMessages={setMessages} />

              <div className="chat-panel">
                <ChatMessages messages={messages} />

                <ChatInput />
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  )
}

export default ChatApp
