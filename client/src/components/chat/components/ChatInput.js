import React from 'react'

const ChatInput = ({
  enterMessage
}) => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="chat-box-tray">
            <input
              type="text"
              placeholder="Type your message here..."
              // onKeyPress={enterMessage}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default ChatInput
