import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { MDBBadge } from 'mdbreact'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import LanguageIcon from '@material-ui/icons/Language'
import Divider from '@material-ui/core/Divider'
import socketIOClient from 'socket.io-client'
import {
  getConversations,
  updateConversation
} from '../../../actions/chat/chat'
import { getInitialsFromName } from '../utils'
import config from '../../../config'
import { conversationsStyles as useStyles } from '../utils/styles'

const Conversations = ({
  setUser,
  setScope,
  auth: { user },
  handleToggleSidebar
}) => {
  const currentUserId = user
  const classes = useStyles()

  const [conversations, setConversations] = useState([])
  const [newConversation, setNewConversation] = useState(null)

  useEffect(() => {
    async function init() {
      const res = await getConversations()
      setConversations(res)
    }

    init()
  }, [newConversation])

  useEffect(() => {
    const socket = socketIOClient(config.SOCKET_URL)

    socket.on('messages', (data) => {
      setNewConversation(data)
    })

    return () => {
      socket.removeListener('messages')
    }
  }, [])

  const markAsConversationAsRead = async (conversation) => {
    await updateConversation(conversation._id, {
      lastMessageIsRead: true
    })

    const conversations = await getConversations()

    setConversations(conversations)
  }

  // Returns the recipient name that does not
  // belong to the current user.
  const handleRecipient = (recipients) => {
    for (let i = 0; i < recipients.length; i++) {
      if (recipients[i].username !== currentUserId.username) {
        return recipients[i]
      }
    }

    return null
  }

  return (
    <List className={classes.list}>
      <ListItem
        classes={{ root: classes.subheader }}
        onClick={() => {
          setScope('Global Chat')
        }}
      >
        <ListItemAvatar>
          <Avatar className={classes.globe}>
            <LanguageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText className={classes.subheaderText} primary="Global Chat" />
      </ListItem>
      <Divider />

      {conversations && (
        <>
          {conversations.map((conversation) => (
            <ListItem
              className={classes.listItem}
              key={conversation._id}
              button
              onClick={() => {
                setUser(handleRecipient(conversation.recipientObj))
                setScope(handleRecipient(conversation.recipientObj).first_name)

                markAsConversationAsRead(conversation)

                // hide the side bar when a user is clicked
                handleToggleSidebar(false)
              }}
            >
              <ListItemAvatar>
                <Avatar>
                  {getInitialsFromName(
                    handleRecipient(conversation.recipientObj).first_name
                  )}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={handleRecipient(conversation.recipientObj).first_name}
                secondary={
                  <>
                    {conversation.lastMessage.substr(0, 30)}
                    {'... '}

                    {/* 
                      if the current auth user was the last person that sent the message, then it would be read ALWAYS
                      if not and the lastMessageRead is false
                      if (c.lastMessageIsRead) { } 
                    */}
                    {conversation.lastMessageSenderId !== currentUserId._id &&
                    !conversation.lastMessageIsRead ? (
                      <MDBBadge color="danger" className="ml-1">
                        &nbsp;
                      </MDBBadge>
                    ) : (
                      ''
                    )}
                  </>
                }
              />
            </ListItem>
          ))}
        </>
      )}
    </List>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Conversations)
