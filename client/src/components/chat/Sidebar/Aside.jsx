import React from 'react'
import { ProSidebar, SidebarHeader, SidebarContent } from 'react-pro-sidebar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import Conversations from './Conversations'
import Users from './Users'

import './Aside.scss'

const Aside = ({
  toggled,
  handleToggleSidebar,
  handleChange,
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
          onChange={handleChange}
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

export default Aside
