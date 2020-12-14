import api from '../../../utils/api'
// import displayErrors from '../../../utils/displayErrors'

export const getUsers = async () => {
  try {
    const response = (await api.get('/utils/users')).data

    console.log({ response })
    return response
  } catch (err) {
    console.log(err)
  }
}
