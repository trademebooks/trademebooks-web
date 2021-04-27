import React, { useState } from 'react'
import Aside from './Sidebar/Aside'
import Main from './Main/Main'

import './Chat.scss'

function ChatContainer() {
  // for the side bar
  const [toggled, setToggled] = useState(false)

  const handleToggleSidebar = (value) => {
    setToggled(value)
  }

  // main chat content
  const [scope, setScope] = useState('Global Chat')
  const [tab, setTab] = useState(0)
  const [user, setUser] = useState(null)

  const handleChange = (e, newVal) => {
    setTab(newVal)
  }

  return (
    <div className="chat-app">
      <Aside
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
        handleChange={handleChange}
        tab={tab}
        setUser={setUser}
        setScope={setScope}
      />
      <Main
        handleToggleSidebar={handleToggleSidebar}
        scope={scope}
        user={user}
      />
    </div>
  )
}

export default ChatContainer
