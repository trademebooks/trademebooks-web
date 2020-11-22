import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Flex } from 'rebass'

import ChatProvider from './Context/ChatProvider'
import SidebarContainer from './SidebarContainer'
import ChatBoxContainer from './ChatBoxContainer'

import socket from '../../utils/socket'
import api from '../../../../utils/api'


const FlexWrapper = styled(Flex)`
  flex: 1;
`

const Wrapper = ({ match, authUser }) => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get(`/utilities/users`)
        const responseJson = response.data.data
        const users = responseJson
        setUsers(users)
      } catch (error) {
        console.log({ error })
      }
    })();
  }, [])

  return (
    <ChatProvider>
      <FlexWrapper mx={0}>
        <SidebarContainer
          username={authUser.username}
          onlineUsers={users}
        />
        <ChatBoxContainer
          match={match}
          onlineUsers={users}
        />
      </FlexWrapper>
    </ChatProvider>
  )
}

const mapStateToProps = (state) => ({
  authUser: state.auth.user
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper)
