import React from 'react'

const ChatMessages = ({
  messages
}) => {
  return (
    <>
      <div>
        {
          messages.map((message, i) => {
            return (
              <p key={i}>{message.messageBody}</p>
            )
          })
        }
      </div>
    </>
  )
}

export default ChatMessages
