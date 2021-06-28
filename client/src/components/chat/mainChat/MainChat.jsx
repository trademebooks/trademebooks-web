import React, { useState, useEffect, useRef } from 'react'
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

const MainChat = ({
  handleToggleSidebar,
  scope,
  currentConversation,
  currentAuthUser,
  setIsLoadedFromPage,
  newMessage,
  setNewMessage
}) => {
  const [messages, setMessages] = useState([])

  const [lastMessage, setLastMessage] = useState(null)

  const chatBottom = useRef(null)
  const classes = useStyles()

  const reloadMessages = async () => {
    if (currentConversation && currentConversation.chattingWithUser) {
      const messages = await getConversationMessages(
        currentConversation.chattingWithUser._id
      )
      setMessages(messages)
    } else if (scope === 'Global Chat') {
      const globalMessages = await getGlobalMessages()
      setMessages(globalMessages)
    } else {
      setMessages([])
    }
  }

  const scrollToBottom = () => {
    chatBottom.current.scrollIntoView({ behavior: 'auto' })
  }

  useEffect(scrollToBottom, [messages])

  useEffect(() => {
    async function init() {
      await reloadMessages()
      scrollToBottom()
    }

    init()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastMessage, scope, currentConversation])

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
      await sendConversationMessage(
        currentConversation.chattingWithUser._id,
        newMessage
      )

      setNewMessage('')

      setIsLoadedFromPage(false)
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
            {/* Chat Messages List */}
            <Messages
              messages={messages}
              currentAuthUser={currentAuthUser}
              chatBottom={chatBottom}
            />

            {/* Chat Input Text Form */}
            <ChatInputForm
              newMessage={newMessage}
              setNewMessage={setNewMessage}
              sendMessageHandler={sendMessageHandler}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default MainChat
