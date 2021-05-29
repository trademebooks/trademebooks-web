import React, { useState } from 'react'
import Sidebar from './sidebar/Sidebar'
import MainChat from './mainChat/MainChat'

import './Chat.scss'

const ChatContainer = () => {
  // 1. Sidebar - section
  const [toggled, setToggled] = useState(false)
  const handleToggleSidebar = (value) => {
    setToggled(value)
  }
  // For switching the Sidebar tabs
  const [tab, setTab] = useState(0)
  const handleToggleTab = (e, newVal) => {
    setTab(newVal)
  }

  // 2. Main Chat - section
  const [scope, setScope] = useState('Global Chat')
  const [user, setUser] = useState(null)

  return (
    <div className="chat-app">
      <Sidebar
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
        toggleTab={handleToggleTab}
        tab={tab}
        setUser={setUser}
        setScope={setScope}
      />
      <MainChat
        handleToggleSidebar={handleToggleSidebar}
        user={user}
        scope={scope}
      />
    </div>
  )
}

export default ChatContainer
