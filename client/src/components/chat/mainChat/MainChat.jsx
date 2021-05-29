import React, { useState, useEffect, useRef } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import SendIcon from '@material-ui/icons/Send'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Paper from '@material-ui/core/Paper'
import socketIOClient from 'socket.io-client'
import classnames from 'classnames'
import { getInitialsFromName } from '../utils'
import {
  getGlobalMessages,
  sendGlobalMessage,
  getConversationMessages,
  sendConversationMessage
} from '../../../actions/chat/chatService'
import { connect } from 'react-redux'
import { FaBars } from 'react-icons/fa'
import config from '../../../config'
import { mainChatStyles as useStyles } from '../utils/styles'

const ChatBox = (props) => {
  const {
    auth: { user },
    handleToggleSidebar,
    scope
  } = props

  const currentUserId = user._id

  const [newMessage, setNewMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [lastMessage, setLastMessage] = useState(null)

  let chatBottom = useRef(null)
  const classes = useStyles()

  const reloadMessages = async () => {
    if (scope === 'Global Chat') {
      const globalMessages = await getGlobalMessages()
      setMessages(globalMessages)
    } else if (scope !== null && props.conversationId !== null) {
      const messages = await getConversationMessages(props.user._id)
      setMessages(messages)
    } else {
      setMessages([])
    }
  }

  const scrollToBottom = () => {
    chatBottom.current.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(scrollToBottom, [messages])

  useEffect(() => {
    ;(async () => {
      await reloadMessages()
      scrollToBottom()
    })()
  }, [lastMessage, scope, props.conversationId])

  useEffect(() => {
    const socket = socketIOClient(config.SOCKET_URL)
    socket.on('messages', (data) => setLastMessage(data))
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (scope === 'Global Chat') {
      await sendGlobalMessage(newMessage)
      setNewMessage('')
    } else {
      await sendConversationMessage(props.user._id, newMessage)
      setNewMessage('')
    }
  }

  return (
    <div class="main-chat">
      <Grid container className={classes.root}>
        <Grid item xs={12} className={classes.headerRow}>
          <Paper className={classes.paper} square elevation={2}>
            <span
              className="btn-toggle"
              onClick={() => handleToggleSidebar(true)}
            >
              <FaBars />
            </span>
            &nbsp;
            <Typography color="inherit" variant="h6">
              {props.scope}
            </Typography>
            &nbsp;
            <span>&nbsp;</span>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Grid container className={classes.messageContainer}>
            <Grid item xs={12} className={classes.messagesRow}>
              {messages && (
                <List>
                  {messages.map((m) => (
                    <ListItem
                      key={m._id}
                      className={classnames(classes.listItem, {
                        [`${classes.listItemRight}`]:
                          m.fromObj[0]._id === currentUserId
                      })}
                      alignItems="flex-start"
                    >
                      <ListItemAvatar className={classes.avatar}>
                        <Avatar>
                          {getInitialsFromName(m.fromObj[0].first_name)}
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        classes={{
                          root: classnames(classes.messageBubble, {
                            [`${classes.messageBubbleRight}`]:
                              m.fromObj[0]._id === currentUserId
                          })
                        }}
                        primary={m.fromObj[0] && m.fromObj[0].first_name}
                        secondary={<>{m.body}</>}
                      />
                    </ListItem>
                  ))}
                </List>
              )}
              <div ref={chatBottom} />
            </Grid>
            <Grid item xs={12} className={classes.inputRow}>
              <form onSubmit={handleSubmit} className={classes.form}>
                <Grid
                  container
                  className={classes.newMessageRow}
                  alignItems="flex-end"
                >
                  <Grid item xs={11}>
                    <TextField
                      id="message"
                      label="Message"
                      variant="outlined"
                      margin="dense"
                      fullWidth
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      autoComplete="off"
                    />
                  </Grid>
                  <Grid item xs={1}>
                    <IconButton type="submit">
                      <SendIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ChatBox)
