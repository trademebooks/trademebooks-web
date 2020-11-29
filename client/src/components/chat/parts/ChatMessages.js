import React from 'react'

const ChatMessages = ({ messages }) => {
  return (
    <>
      <div className="chat-messages">
        {messages.map((message, i) => {
          return (
            <div key={i} className="row no-gutters">
              <div className="col-md-3">
                <div className="chat-bubble chat-bubble--left">
                {/* <div className="chat-bubble chat-bubble--right">Hello dude!</div> */}
                  {message.messageBody}
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
