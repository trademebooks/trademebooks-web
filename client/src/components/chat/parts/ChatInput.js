import React from 'react'

const ChatInput = ({
  enterMessage
}) => {
  return (
    <>
      <div>
        <input type="text" onKeyPress={enterMessage} />
      </div>
    </>
  )
}

export default ChatInput
