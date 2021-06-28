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

  // This is a utility to let us know if the user is loading the page via the inital browser load via the URL address bar
  const [isLoadedFromPage, setIsLoadedFromPage] = useState(true)

  // This is whatever the user is typing into the form
  const [newMessage, setNewMessage] = useState('')

  return (
    <div className="chat-app">
      <Sidebar
        handleToggleSidebar={handleToggleSidebar}
        toggled={toggled}
        toggleTab={handleToggleTab}
        tab={tab}
        setScope={setScope}
        setCurrentConversation={setCurrentConversation}
        currentConversation={currentConversation}
        isLoadedFromPage={isLoadedFromPage}
        setNewMessage={setNewMessage}
      />
      <MainChat
        handleToggleSidebar={handleToggleSidebar}
        scope={scope}
        currentConversation={currentConversation}
        currentAuthUser={currentAuthUser}
        setIsLoadedFromPage={setIsLoadedFromPage}
        newMessage={newMessage}
        setNewMessage={setNewMessage}
      />
    </div>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer)
