import api from '../../utils/api'

// get a list of all users in the database
export const getUsers = async () => {
  try {
    const response = (await api.get('/utils/users')).data
    
    return response
  } catch (err) {
    console.log(err)
  }
}
