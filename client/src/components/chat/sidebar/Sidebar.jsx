import React from 'react'
import { ProSidebar, SidebarContent } from 'react-pro-sidebar'
import ConversationsTab from './ConversationsTab'

const Sidebar = ({
  handleToggleSidebar,
  toggled,
  setScope,
  setCurrentConversation,
  currentConversation,
  isLoadedFromPage,
  setNewMessage,
  currentAuthUser
}) => {
  return (
    <ProSidebar
      image={false}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarContent>
        <ConversationsTab
          handleToggleSidebar={handleToggleSidebar}
          setScope={setScope}
          setCurrentConversation={setCurrentConversation}
          currentConversation={currentConversation}
          isLoadedFromPage={isLoadedFromPage}
          setNewMessage={setNewMessage}
          currentAuthUser={currentAuthUser}
        />
      </SidebarContent>
    </ProSidebar>
  )
}

export default Sidebar
