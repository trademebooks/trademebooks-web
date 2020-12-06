import { toastr } from 'react-redux-toastr'

import api from '../utils/api'

export const postContact = async (contactFormData) => {
  try {
    await api.post('/utilities/contact', contactFormData)

    toastr.success('Message sent! Thank you for contacting us.')
  } catch (error) {
    toastr.error('There was something wrong with your submission')

    console.log({ error })
  }
}