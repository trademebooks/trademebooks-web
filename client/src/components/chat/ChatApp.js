import React, { useEffect, useState } from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'

import ChatMainContent from './parts/ChatMainContent'
import ChatSideBar from './parts/ChatSidebar'

import api from '../../utils/api'
import socket from '../../utils/socket'

const ChatApp = ({ match }) => {
  const [users, setUsers] = useState([])

  const [chattingWithUser, setChattingWithUser] = useState({
    first_name: '',
    last_name: ''
  })

  const [messages, setMessages] = useState([])

  useEffect(() => {
    ; (async () => {
      try {
        const response = await api.get(`/utilities/users`)
        const responseJson = response.data.data
        const users = responseJson
        setUsers(users)

        if (!match.params.userId) {
          setChattingWithUser(users[0])
        }
      } catch (error) {
        console.log({ error })
      }
    })()

    socket.on('receive_private_message', (messageSent) => {
      console.log(
        'receive_private_message',
        JSON.stringify(messageSent, null, '\t')
      )
      setMessages((messages) => [...messages, messageSent])

      document.querySelector('.chat-messages').scrollBy(0, 99999);
    })
  }, [])

  const chatWithUser = (user) => {
    setChattingWithUser(user)

    socket.emit('join_private_room', user)
  }

  const enterMessage = (event) => {
    if (event.key === 'Enter') {
      const messageToSend = {
        messageBody: event.target.value,
        chattingWithUser
      }

      socket.emit('send_private_message', messageToSend)

      event.target.value = ''


    }
  }

  return (
    <>
      <MDBContainer className="mt-4 chat-app-container">
        <MDBRow className="justify-content-center">
          <MDBCol sm="12" md="4">
            <ChatSideBar
              users={users}
              chatWithUser={chatWithUser}
            />
          </MDBCol>
          <MDBCol sm="12" md="8">
            <ChatMainContent
              chattingWithUser={chattingWithUser}
              enterMessage={enterMessage}
              messages={messages}
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  )
}

export default ChatApp
