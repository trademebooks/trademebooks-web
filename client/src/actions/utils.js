import api from '../utils/api'
import displayErrors from '../utils/displayErrors'

export const postContact = async (contactFormData) => {
  try {
    await api.post('/utilities/contact', contactFormData)
  } catch (error) {
    displayErrors(error)
  }
}
