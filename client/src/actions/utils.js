import api from '../utils/api'
import displayErrors from '../utils/displayErrors'

export const postContact = async (contactFormData) => {
  try {
    await api.post('/utils/contact', contactFormData)
  } catch (error) {
    displayErrors(error)
  }
}
