import { JOIN_NEW_USER } from './types'

export const joinUser = (data) => async (dispatch) => {
  console.log('joinUser action', data)

  const { authUser, onlineUsers } = data
  dispatch({
    type: JOIN_NEW_USER,
    payload: {
      authUser,
      onlineUsers
    }
  })
}
