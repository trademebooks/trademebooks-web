import React, { useState } from 'react'
import { connect } from 'react-redux'
import Sidebar from './sidebar/Sidebar'
import MainChat from './mainChat/MainChat'

import './Chat.scss'

const ChatContainer = ({ auth: { user } }) => {
  // The currently authenticated user in the presently logged in session
  const currentAuthUser = user

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
  // The current conversation that current auth user is having
  const [currentConversation, setCurrentConversation] = useState(null)

  return (
    <div className="chat-app">
      <Sidebar
        handleToggleSidebar={handleToggleSidebar}
        toggled={toggled}
        toggleTab={handleToggleTab}
        tab={tab}
        setScope={setScope}
        setCurrentConversation={setCurrentConversation}
        currentAuthUser={currentAuthUser}
      />
      <MainChat
        handleToggleSidebar={handleToggleSidebar}
        scope={scope}
        currentConversation={currentConversation}
        currentAuthUser={currentAuthUser}
      />
    </div>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer)
