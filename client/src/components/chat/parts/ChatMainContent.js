import React from 'react'

import ChatMessages from './ChatMessages'
import ChatInput from './ChatInput'

const ChatMainContent = ({ chattingWithUser, enterMessage, messages }) => {
  return (
    <>
      <div>
        <h3>
          Chatting with User:{' '}
          {chattingWithUser.first_name + ' ' + chattingWithUser.last_name}
        </h3>
        <ChatMessages messages={messages} />
        <ChatInput enterMessage={enterMessage} />
      </div>
    </>
  )
}

export default ChatMainContent
