import React, { Component } from 'react'
import { connect } from 'react-redux'

// context
import withChat from './Context/withChat'

// styled components
import styled from 'styled-components'
// rebass
import { Flex, Text, Button } from 'rebass'

// components
import Chatbox from '../../DataDisplay/Chatbox'
import ChatBoxContent from './ChatBoxContent'
import Icon from '../../DataDisplay/Icon'

// intern components
const Wrapper = styled(Flex)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.graylight};
`

const NoContentWrapper = styled(Flex)`
  flex: 1;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.grayxdark};
`

const SidebarButton = styled(Button)`
  display: none;
  background: transparent;
  cursor: pointer;

  &:focus {
    box-shadow: none;
  }

  @media (max-width: 48em) {
    display: block;
  }
`

const IconSidebarButton = styled(Icon)`
  display: flex;
  fill: ${(props) => props.theme.colors.graywhite};
`

class ChatBoxContainer extends Component {
  state = {
    chatsTitle: '',
    showChat: false,
    caching: {
      id: ''
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const {
      match: { params },
      onlineUsers
    } = nextProps

    if (params.id && params.id !== prevState.caching.id) {
      console.log({ onlineUsers })

      let chatsTitle = 'Chat Title'
      let personToChatWith = onlineUsers.find(
        (x) => x._id === params.id
      )

      if (personToChatWith) {
        personToChatWith = personToChatWith
        chatsTitle = personToChatWith.username
      }

      return {
        showChat: !!params.id,
        chatsTitle,
        caching: {
          ...prevState.caching,
          id: params.id
        }
      }
    }

    return null
  }

  renderContent() {
    const { showChat } = this.state

    if (showChat) {
      return <ChatBoxContent />
    }

    return (
      <NoContentWrapper alignItems="center" justifyContent="center">
        <Text
          textAlign="center"
          fontWeight="bold"
          children="Click a friend to chat in private!"
        />
      </NoContentWrapper>
    )
  }

  render() {
    const { chatContext } = this.props
    const { showChat, chatsTitle } = this.state

    return (
      <Wrapper width={[10 / 12]} flexDirection="column">
        <Chatbox.Header>
          <SidebarButton onClick={() => chatContext.actions.showSideList(true)}>
            <IconSidebarButton
              viewBox="0 0 25 25"
              icon="menu"
              width="25"
              height="25"
            />
          </SidebarButton>
          {showChat && chatsTitle}
        </Chatbox.Header>
        {this.renderContent()}
      </Wrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  chatReducer: state.chatUser
})

export default withChat(connect(mapStateToProps)(ChatBoxContainer))
