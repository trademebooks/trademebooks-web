import React from 'react'

const ChatMessages = ({
  messages
}) => {
  return (
    <>
      <div className="chat-messages">
        {messages.map((message, i) => {
          return (
            <div key={i} className="row no-gutters">
              <div className="col-md-6">
                <div className="chat-bubble chat-bubble--left">
                  {message?.messageBody}
                </div>
              </div>

              <div className="col-md-6 offset-md-6">
                <div className="chat-bubble chat-bubble--right">
                  {message?.messageBody}
                </div>
              </div>

            </div>
          )
        })}
      </div>
    </>
  )
}

export default ChatMessages
