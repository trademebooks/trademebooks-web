import React from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import SendIcon from '@material-ui/icons/Send'
import { mainChatStyles as useStyles } from '../utils/styles'

const ChatInputForm = ({ sendMessageHandler, newMessage, setNewMessage }) => {
  const classes = useStyles()

  return (
    <>
      <Grid item xs={12} className={classes.inputRow}>
        <form onSubmit={sendMessageHandler} className={classes.form}>
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
    </>
  )
}

export default ChatInputForm
