import React from 'react'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import classnames from 'classnames'
import { mainChatStyles as useStyles } from '../utils/styles'
import { getInitialsFromName } from '../utils'

const Messages = ({ messages, currentAuthUser, chatBottom }) => {
  const classes = useStyles()

  return (
    <>
      <Grid item xs={12} className={classes.messagesRow}>
        {messages && (
          <List>
            {messages.map((message) => (
              <ListItem
                key={message._id}
                className={classnames(classes.listItem, {
                  [`${classes.listItemRight}`]:
                    message.senderUser._id === currentAuthUser._id
                })}
                alignItems="flex-start"
              >
                <ListItemAvatar className={classes.avatar}>
                  <Avatar>
                    {getInitialsFromName(message.senderUser.first_name)}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  classes={{
                    root: classnames(classes.messageBubble, {
                      [`${classes.messageBubbleRight}`]:
                        message.senderUser._id === currentAuthUser._id
                    })
                  }}
                  primary={message.senderUser && message.senderUser.first_name}
                  secondary={<>{message.body}</>}
                />
              </ListItem>
            ))}
          </List>
        )}
        <div ref={chatBottom} />
      </Grid>
    </>
  )
}

export default Messages
