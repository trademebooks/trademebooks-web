import api from '../../../utils/api'

export const getUsers = async () => {
  try {
    const response = (await api.get('/utils/users')).data
    
    return response
  } catch (err) {
    console.log(err)
  }
}
