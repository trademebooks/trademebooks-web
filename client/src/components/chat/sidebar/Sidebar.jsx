import React from 'react'
import { ProSidebar, SidebarHeader, SidebarContent } from 'react-pro-sidebar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import ConversationsTab from './ConversationsTab'
import Users from './Users'

const Sidebar = ({
  handleToggleSidebar,
  toggled,
  toggleTab,
  tab,
  setScope,
  setCurrentConversation,
  currentConversation,
  isLoadedFromPage,
  setNewMessage
}) => {
  return (
    <ProSidebar
      image={false}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      {/* <SidebarHeader>
        <Tabs
          onChange={toggleTab}
          variant="fullWidth"
          value={tab}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Chats" />
          <Tab label="Users" />
        </Tabs>
      </SidebarHeader> */}
      <SidebarContent>
        {tab === 0 && (
          <ConversationsTab
            handleToggleSidebar={handleToggleSidebar}
            setScope={setScope}
            setCurrentConversation={setCurrentConversation}
            currentConversation={currentConversation}
            isLoadedFromPage={isLoadedFromPage}
            setNewMessage={setNewMessage}
          />
        )}
        {/* {tab === 1 && (
          <Users
            handleToggleSidebar={handleToggleSidebar}
            setScope={setScope}
            setCurrentConversation={setCurrentConversation}
          />
        )} */}
      </SidebarContent>
    </ProSidebar>
  )
}

export default Sidebar
