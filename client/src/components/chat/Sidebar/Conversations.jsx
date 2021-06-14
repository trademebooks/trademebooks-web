import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'

import { conversationsStyles as useStyles } from '../utils/styles'
import { getInitialsFromName } from '../utils'

const Conversations = ({
  conversations,
  handleToggleSidebar,
  setScope,
  setCurrentConversation
}) => {
  const classes = useStyles()

  const query = new URLSearchParams(useLocation().search)
  useEffect(() => {
    const currentConversationUserId = query.get('userId')

    if (Array.isArray(conversations)) {
      const currentConvo = conversations.find((conversation) => {
        return conversation.chattingWithUser._id === currentConversationUserId
      })

      if (currentConvo) {
        setScope(
          `${currentConvo.chattingWithUser.first_name} ${currentConvo.chattingWithUser.last_name}`
        )
      }

      setCurrentConversation(currentConvo)
    }
  }, [query])

  return (
    <>
      {conversations && (
        <>
          {conversations.map((conversation) => {
            const { chattingWithUser } = conversation
            return (
              <ListItem
                className={classes.listItem}
                key={conversation._id}
                button
                onClick={() => {
                  setCurrentConversation(conversation)
                  setScope(
                    `${chattingWithUser.first_name} ${chattingWithUser.last_name}`
                  )
                  // markAsConversationAsRead(conversation)

                  // hide the side bar when a user is clicked
                  handleToggleSidebar(false)
                }}
              >
                <ListItemAvatar>
                  <Avatar>
                    {getInitialsFromName(
                      `${chattingWithUser.first_name} ${chattingWithUser.last_name}`
                    )}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={`${chattingWithUser.first_name} ${chattingWithUser.last_name}`}
                  secondary={
                    <>{`${conversation.lastestMessage.substr(0, 30)}...`}</>
                  }
                />
              </ListItem>
            )
          })}
        </>
      )}
    </>
  )
}

export default Conversations
