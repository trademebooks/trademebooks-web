import { toastr } from 'react-redux-toastr'

const displayErrors = (error) => {
  const errors = error?.response?.data?.errors

  if (errors) {
    errors.forEach((errorMessage) => {
      toastr.error(errorMessage)
    })
  }
}

export default displayErrors
