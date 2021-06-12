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
  // between conversations and users
  const [tab, setTab] = useState(0)
  const handleToggleTab = (e, newVal) => {
    setTab(newVal)
  }

  // 2. Main Chat - section
  const [scope, setScope] = useState('Global Chat')
  const [user, setUser] = useState(null) // set the current user that the auth user is chatting with

  return (
    <div className="chat-app">
      <Sidebar
        handleToggleSidebar={handleToggleSidebar}
        toggled={toggled}
        toggleTab={handleToggleTab}
        tab={tab}
        setScope={setScope}
        setUser={setUser}
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
