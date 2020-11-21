import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Flex } from 'rebass'

import ChatProvider from './Context/ChatProvider'
import SidebarContainer from './SidebarContainer'
import ChatBoxContainer from './ChatBoxContainer'

import socket from '../../utils/socket'

import { joinUser } from '../../../../actions/chatUser'

const FlexWrapper = styled(Flex)`
  flex: 1;
`

const Wrapper = ({ match, authUser, joinUser, onlineUsers }) => {

  useEffect(() => {
    socket.emit('join user')

    socket.on('user joined', (onlineUsers) => {
      console.log('user joined', onlineUsers)
  
      joinUser({
        authUser,
        onlineUsers
      })
    })  
  }, [])

  return (
    <ChatProvider>
      <FlexWrapper mx={0}>
        <SidebarContainer
          username={authUser.username}
          onlineUsers={onlineUsers}
        />
        <ChatBoxContainer
          match={match}
          onlineUsers={onlineUsers}
        />
      </FlexWrapper>
    </ChatProvider>
  )
}

const mapStateToProps = (state) => ({
  authUser: state.auth.user,
  onlineUsers: state.chatUser.onlineUsers
})

const mapDispatchToProps = {
  joinUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper)
