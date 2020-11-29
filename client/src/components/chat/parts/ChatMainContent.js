import React from 'react'

import ChatMessages from './ChatMessages'
import ChatInput from './ChatInput'
import ChatWithUser from './ChatWithUser'

const ChatMainContent = ({ chattingWithUser, enterMessage, messages }) => {
  return (
    <>
      <ChatWithUser chattingWithUser={chattingWithUser} />
      
      <div className="chat-panel">
        <ChatMessages messages={messages} />

        <ChatInput enterMessage={enterMessage} />
      </div>
    </>
  )
}

export default ChatMainContent
