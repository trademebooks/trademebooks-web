import React, { useState, useEffect } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import LanguageIcon from '@material-ui/icons/Language'
import Divider from '@material-ui/core/Divider'
import { makeStyles } from '@material-ui/core/styles'
import socketIOClient from 'socket.io-client'

import { getConversations } from './Services/chatService'
import commonUtilites from './Utilities/common'
import { connect } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  subheader: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer'
  },
  globe: {
    backgroundColor: theme.palette.primary.dark
  },
  subheaderText: {
    color: theme.palette.primary.dark
  },
  list: {
    maxHeight: 'calc(100vh - 112px)',
    overflowY: 'auto'
  }
}))

const Conversations = (props) => {
  const {
    auth: { user }
  } = props

  const currentUserId = user

  const classes = useStyles()
  const [conversations, setConversations] = useState([])
  const [newConversation, setNewConversation] = useState(null)

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

  useEffect(() => {
    ;(async () => {
      const res = await getConversations()
      setConversations(res)
    })()
  }, [newConversation])

  useEffect(() => {
    let socket = socketIOClient(process.env.REACT_APP_API_URL)
    socket.on('messages', (data) => setNewConversation(data))

    return () => {
      socket.removeListener('messages')
    }
  }, [])

  return (
    <List className={classes.list}>
      <ListItem
        classes={{ root: classes.subheader }}
        onClick={() => {
          props.setScope('Global Chat')
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
          {conversations.map((c) => (
            <ListItem
              className={classes.listItem}
              key={c._id}
              button
              onClick={() => {
                props.setUser(handleRecipient(c.recipientObj))
                props.setScope(handleRecipient(c.recipientObj).first_name)
              }}
            >
              <ListItemAvatar>
                <Avatar>
                  {commonUtilites.getInitialsFromName(
                    handleRecipient(c.recipientObj).first_name
                  )}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={handleRecipient(c.recipientObj).first_name}
                secondary={<>{c.lastMessage}</>}
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
