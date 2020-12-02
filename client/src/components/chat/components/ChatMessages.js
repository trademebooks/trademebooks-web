import React from 'react'

const ChatMessages = ({
  authUser,
  currentChatMessages
}) => {

  React.useEffect(() => {
    document.querySelector('.chat-messages').scrollBy(0, 99999999999999999)
  }, [currentChatMessages])

  return (
    <>
      <div className="chat-messages">
        {currentChatMessages.map((message, i) => {
          if (authUser._id === message.userId) {
            return (
              <div key={i} className="row no-gutters">
                <div className="col-md-6">
                  <div className="chat-bubble chat-bubble--left">
                    {message?.messageBody}
                  </div>
                </div>
              </div>
            )
          }
          else {
            return (
              <div key={i} className="row no-gutters">
                <div className="col-md-6 offset-md-6">
                  <div className="chat-bubble chat-bubble--right">
                    {message?.messageBody}
                  </div>
                </div>
              </div>
            )
          }
        })}
      </div>
    </>
  )
}

export default ChatMessages
