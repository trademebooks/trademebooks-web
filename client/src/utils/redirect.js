import { toastr } from 'react-redux-toastr'

const redirect = (redirectUrl) => {
  setTimeout(() => {
    window.location.href = redirectUrl
  }, 1500)
}

export default redirect
