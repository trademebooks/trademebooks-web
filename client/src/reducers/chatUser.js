import { JOIN_NEW_USER, NEW_ONLINE_USER, REMOVE_ONLINE_USER } from '../actions/types'

const INITIAL_STATE = {
  authUser: {},
  onlineUsers: []
}

const chatUser = (state = INITIAL_STATE, action) => {
  const { type, payload } = action

  switch (type) {
    case JOIN_NEW_USER:
      return {
        ...state,
        authUser: payload.authUser,
        onlineUsers: payload.onlineUsers
      }

    case NEW_ONLINE_USER:
      const newOnlineUsers = payload.newOnlineUsers
      return {
        ...state,
        onlineUsers: [
          ...newOnlineUsers
        ]
      }

    default:
      return state
  }
}

export default chatUser
