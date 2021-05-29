import { makeStyles } from '@material-ui/core/styles'

export const mainChatStyles = makeStyles((theme) => ({
  root: {
    height: 'calc(100vh - 70px)'
  },
  headerRow: {
    maxHeight: 60,
    zIndex: 5
  },
  paper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 1rem 0 1rem',
    height: '100%',
    color: theme.palette.primary.dark
  },
  messageContainer: {
    height: '100%',
    display: 'flex',
    alignContent: 'flex-end'
  },
  messagesRow: {
    maxHeight: 'calc(100vh - 184px)',
    overflowY: 'auto'
  },
  newMessageRow: {
    width: '100%',
    padding: theme.spacing(0, 2, 1)
  },
  messageBubble: {
    padding: 10,
    border: '1px solid white',
    backgroundColor: 'white',
    borderRadius: '0 10px 10px 10px',
    boxShadow: '-3px 4px 4px 0px rgba(0,0,0,0.08)',
    marginTop: 8,
    maxWidth: '40em'
  },
  messageBubbleRight: {
    borderRadius: '10px 0 10px 10px'
  },
  inputRow: {
    display: 'flex',
    alignItems: 'flex-end'
  },
  form: {
    width: '100%'
  },
  avatar: {
    margin: theme.spacing(1, 1.5)
  },
  listItem: {
    display: 'flex',
    width: '100%'
  },
  listItemRight: {
    flexDirection: 'row-reverse'
  }
}))

export const usersStyles = makeStyles((theme) => ({
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
  },
  avatar: {
    margin: theme.spacing(0, 3, 0, 1)
  }
}))

export const conversationsStyles = makeStyles((theme) => ({
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