import React, { useState, useEffect } from 'react'
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
  setCurrentConversation,
  currentAuthUser
}) => {
  const classes = useStyles()

  /*
  data: [
        {
          _id: '5fc36879a0d3010d607eaade',
          usersWhoHaveReadLastestMessage: ['5e11e9d8eded1d23742c1c6a'],
          lastestMessage: "Sure let's do it!",
          recipientUsers: [
            {
              _id: '5e11e9d8eded1d23742c1c6a',
              first_name: 'Yi Chen',
              last_name: 'Zhu'
            },
            {
              _id: '5e11e9d8eded1d23742c1c6b',
              first_name: 'Cedric',
              last_name: 'Mosdell'
            }
          ],
          chattingWithUser: {
            _id: '5e11e9d8eded1d23742c1c6b',
            first_name: 'Cedric',
            last_name: 'Mosdell'
          }
        }
      ],
  */

  // TODO - TMB0065
  const query = new URLSearchParams(useLocation().search)
  useEffect(() => {
    const currentConversationUserId = query.get('userId')

    if (Array.isArray(conversations)) {
      const currentConversationByUserId = conversations.find((conversation) => {
        return conversation.chattingWithUser._id === currentConversationUserId
      })

      setCurrentConversation(currentConversationByUserId)
    }
  }, [query, conversations, setCurrentConversation])

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
