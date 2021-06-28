import React, { useState, useEffect } from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import LanguageIcon from '@material-ui/icons/Language'
import Divider from '@material-ui/core/Divider'
import socketIOClient from 'socket.io-client'
import { getConversations } from '../../../actions/chat/chat'

import config from '../../../config'
import { conversationsStyles as useStyles } from '../utils/styles'
import Conversations from './Conversations'

const ConversationsTab = ({
  handleToggleSidebar,
  setScope,
  setCurrentConversation,
  currentConversation,
  isLoadedFromPage,
  setNewMessage
}) => {
  const classes = useStyles()

  const [conversations, setConversations] = useState([])
  const [newConversation, setNewConversation] = useState(null)

  useEffect(() => {
    async function init() {
      const conversations = await getConversations()
      setConversations(conversations)
    }

    init()
  }, [newConversation])

  useEffect(() => {
    const socket = socketIOClient(config.SOCKET_URL)

    socket.on('messages', (data) => setNewConversation(data))

    return () => {
      socket.removeListener('messages')
    }
  }, [])

  // const markAsConversationAsRead = async (conversationId) => {
  //   await updateConversation(conversationId)

  //   const conversations = await getConversations()

  //   setConversations(conversations)
  // }

  return (
    <List className={classes.list}>
      <ListItem
        classes={{ root: classes.subheader }}
        onClick={() => {
          // setScope('Global Chat')
        }}
      >
        <ListItemAvatar>
          <Avatar className={classes.globe}>
            <LanguageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText className={classes.subheaderText} primary="Contacts" />
      </ListItem>

      <Divider />

      <Conversations
        conversations={conversations}
        handleToggleSidebar={handleToggleSidebar}
        setScope={setScope}
        setCurrentConversation={setCurrentConversation}
        currentConversation={currentConversation}
        isLoadedFromPage={isLoadedFromPage}
        setNewMessage={setNewMessage}
      />
    </List>
  )
}

export default ConversationsTab
