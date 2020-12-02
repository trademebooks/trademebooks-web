import React from 'react'

import socket from '../../../utils/socket'

const ChatInput = ({
  currentChatUser
}) => {

  const enterMessage = (event) => {
    if (event.key === 'Enter') {
      const messageToSend = {
        userId: currentChatUser._id,
        roomId: currentChatUser.room_id,
        messageBody: event.target.value
      }

      socket.emit('send_private_message', messageToSend)

      event.target.value = ''
    }
  }

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="chat-box-tray">
            <input
              type="text"
              placeholder="Type your message here..."
              onKeyPress={enterMessage}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default ChatInput
