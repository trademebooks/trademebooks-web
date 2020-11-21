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
      const onlineUsers = payload.onlineUsers
      return {
        ...state,
        onlineUsers
      }

    case REMOVE_ONLINE_USER:
      const userIndex = state.onlineUsers.findIndex(
        (x) => x._id === payload.userId
      )
      onlineUsers.splice(userIndex, 1)

      return {
        ...state,
        onlineUsers
      }

    default:
      return state
  }
}

export default chatUser
