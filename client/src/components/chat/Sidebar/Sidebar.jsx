import React from 'react'
import { ProSidebar, SidebarHeader, SidebarContent } from 'react-pro-sidebar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import Conversations from './Conversations'
import Users from './Users'

const Sidebar = ({
  toggled,
  handleToggleSidebar,
  toggleTab,
  tab,
  setUser,
  setScope
}) => {
  return (
    <ProSidebar
      image={false}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
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
      </SidebarHeader>
      <SidebarContent>
        {tab === 0 && (
          <Conversations
            setUser={setUser}
            setScope={setScope}
            handleToggleSidebar={handleToggleSidebar}
          />
        )}
        {tab === 1 && (
          <Users
            setUser={setUser}
            setScope={setScope}
            handleToggleSidebar={handleToggleSidebar}
          />
        )}
      </SidebarContent>
    </ProSidebar>
  )
}

export default Sidebar
