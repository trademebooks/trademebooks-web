import React from 'react'
import ChatBox from './ChatBox'

const Main = ({ handleToggleSidebar, scope, user }) => {
  return (
    <main>
      <ChatBox
        handleToggleSidebar={handleToggleSidebar}
        scope={scope}
        user={user}
      />
    </main>
  )
}

export default Main
