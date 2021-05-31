import React, { useState, useEffect } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import socketIOClient from 'socket.io-client'
import { getUsers } from '../../../actions/chat/user'
import { getInitialsFromName } from '../utils'
import config from '../../../config'
import { usersStyles as useStyles } from '../utils/styles'

const Users = ({ handleToggleSidebar, setUser, setScope }) => {
  const classes = useStyles()
  const [users, setUsers] = useState([])
  const [newUser, setNewUser] = useState(null)

  useEffect(() => {
    async function init() {
      const users = await getUsers()
      setUsers(users)
    }

    init()
  }, [newUser])

  useEffect(() => {
    const socket = socketIOClient(config.SOCKET_URL)

    socket.on('users', (data) => {
      setNewUser(data)
    })
  }, [])

  return (
    <List className={classes.list}>
      {users && (
        <>
          {users.map((user) => (
            <ListItem
              className={classes.listItem}
              key={user._id}
              onClick={() => {
                setUser(user)
                setScope(user.first_name)
                // hide the side bar when a user is clicked
                handleToggleSidebar(false)
              }}
              button
            >
              <ListItemAvatar className={classes.avatar}>
                <Avatar>{getInitialsFromName(user.first_name)}</Avatar>
              </ListItemAvatar>
              <ListItemText primary={user.first_name} />
            </ListItem>
          ))}
        </>
      )}
    </List>
  )
}

export default Users
