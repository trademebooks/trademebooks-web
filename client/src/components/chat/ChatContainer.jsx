import React, { useState } from 'react'
import Sidebar from './Sidebar/Sidebar'
import MainChat from './Main/MainChat'

import './Chat.scss'

const ChatContainer = () => {
  // Sidebar
  const [toggled, setToggled] = useState(false)
  const handleToggleSidebar = (value) => {
    setToggled(value)
  }

  // Main Chat Content
  const [scope, setScope] = useState('Global Chat')
  const [tab, setTab] = useState(0)
  const [user, setUser] = useState(null)

  const handleChange = (e, newVal) => {
    setTab(newVal)
  }

  return (
    <div className="chat-app">
      <Sidebar
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
        handleChange={handleChange}
        tab={tab}
        setUser={setUser}
        setScope={setScope}
      />
      <MainChat
        handleToggleSidebar={handleToggleSidebar}
        scope={scope}
        user={user}
      />
    </div>
  )
}

export default ChatContainer
