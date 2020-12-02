import React, { useState, useEffect } from 'react'

import api from '../../../utils/api'

const ChatWithUser = ({
  chatUsers,
  setMessages
}) => {
  const [chatUser, setChatUser] = useState({
    first_name: '',
    last_name: ''
  })

  useEffect(() => {
    const user = chatUsers[0]?.user
    const room_id = chatUsers[0]?.room_id

    if (user) {
      setChatUser(user)
    }

    (async () => {
      try {
        const messages = (await api.get(`/messages/${room_id}`)).data.data
        setMessages(messages)
      }
      catch (error) {
        console.log({ error })
      }
    })()
  }, [chatUsers])

  return (
    <>
      <div className="settings-tray">
        <div className="friend-drawer no-gutters friend-drawer--grey">
          {
            (chatUser.first_name && chatUser.last_name)
              ?
              <>
                <img
                  className="profile-image"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/1200px-Google_Contacts_icon.svg.png"
                  alt="the profile"
                />
                <div className="text">
                  <h6>
                    {chatUser?.first_name + ' ' + chatUser?.last_name}
                  </h6>
                </div>
              </>
              :
              <div></div>
          }
        </div>
      </div>
    </>
  )
}
export default ChatWithUser
