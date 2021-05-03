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

import { getConversations, updateConversation } from '../Services/chatService'
import commonUtilites from '../Utilities/common'
import { connect } from 'react-redux'

import config from '../../../config'
import { MDBBadge } from 'mdbreact'

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
  },
  listItem: {
    // backgroundColor: '#2bbbad'
    // opacity: 0.7
  }
}))

const Conversations = (props) => {
  const {
    auth: { user },
    handleToggleSidebar
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
    const socket = socketIOClient(config.SOCKET_URL)

    socket.on('messages', (data) => setNewConversation(data))

    return () => {
      socket.removeListener('messages')
    }
  }, [])

  const markAsConversationAsRead = async (conversation) => {
    console.log({ conversation })

    await updateConversation(conversation._id, {
      lastMessageIsRead: true
    })

    const res = await getConversations()

    setConversations(res)

    // const res = await getConversations()
    // setConversations(res)

    // conversation OBJECT
    // {
    //     "_id": "5fd9c848c22f0d3a70e1d0cc",
    //     "__v": 0,
    //     "date": "1608108104163",
    //     "lastMessage": "hi cindy",
    //     "lastMessageIsRead": false,
    //     "lastMessageSenderId" : 12345,
    //     "recipients": [
    //         "5e11e9d8eded1d23742c1c6b",
    //         "5fd9c7d836c6593a7eeeb652"
    //     ],
    //     "recipientObj": [
    //         {
    //             "_id": "5e11e9d8eded1d23742c1c6b",
    //             "first_name": "Cedric",
    //             "last_name": "Mosdell",
    //             "username": "cedric",
    //             "email": "cedric@cedric.com",
    //             "phone_number": "4162932502",
    //             "createdAt": "2020-12-16T08:39:52.478Z"
    //         },
    //         {
    //             "_id": "5fd9c7d836c6593a7eeeb652",
    //             "first_name": "Cindy",
    //             "last_name": "Bayer",
    //             "username": "Sigurd.OKon64",
    //             "email": "Cali40@hotmail.com",
    //             "phone_number": "549-168-9728",
    //             "createdAt": "2020-12-16T08:39:52.587Z"
    //         }
    //     ]
    // },
  }

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

                markAsConversationAsRead(c)

                // hide the side bar when a user is clicked
                handleToggleSidebar(false)
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
                secondary={
                  <>
                    {c.lastMessage.substr(0, 30)}
                    {'... '}

                    {/* 
                      if the current auth user was the last person that sent the message, then it would be read ALWAYS
                      if not and the lastMessageRead is false
                      if (c.lastMessageIsRead) { } 
                    */}
                    {c.lastMessageSenderId !== currentUserId._id &&
                    !c.lastMessageIsRead ? (
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
