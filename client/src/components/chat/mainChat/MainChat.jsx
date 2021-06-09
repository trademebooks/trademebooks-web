import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import socketIOClient from 'socket.io-client'
import {
  getGlobalMessages,
  sendGlobalMessage,
  getConversationMessages,
  sendConversationMessage
} from '../../../actions/chat/chat'
import { FaBars } from 'react-icons/fa'
import config from '../../../config'
import { mainChatStyles as useStyles } from '../utils/styles'
import Messages from './Messages'
import ChatInputForm from './ChatInputForm'

const ChatBox = (props) => {
  const {
    auth: { user },
    handleToggleSidebar,
    scope
  } = props

  const currentUserId = user._id // auth user

  // props.user - the current user that you are scoped to

  const [newMessage, setNewMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [lastMessage, setLastMessage] = useState(null)

  const chatBottom = useRef(null)
  const classes = useStyles()

  const reloadMessages = async () => {
    // console.log(JSON.stringify(props, null, '\t'))
    if (scope === 'Global Chat') {
      const globalMessages = await getGlobalMessages()
      setMessages(globalMessages)
    } else if (scope !== null) {
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
    async function init() {
      await reloadMessages()
      scrollToBottom()
    }

    init()
  }, [lastMessage, scope])

  useEffect(() => {
    const socket = socketIOClient(config.SOCKET_URL)

    socket.on('messages', (data) => setLastMessage(data))
  }, [])

  const sendMessageHandler = async (event) => {
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
    <div className="main-chat">
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
              {scope}
            </Typography>
            &nbsp;
            <span>&nbsp;</span>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Grid container className={classes.messageContainer}>
            {/* Messages List */}
            <Messages
              messages={messages}
              chatBottom={chatBottom}
              currentUserId={currentUserId}
            />

            {/* Input Text */}
            <ChatInputForm
              sendMessageHandler={sendMessageHandler}
              newMessage={newMessage}
              setNewMessage={setNewMessage}
            />
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
