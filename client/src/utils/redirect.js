import { toastr } from 'react-redux-toastr'

const redirect = (redirectUrl) => {
  setTimeout(() => {
    window.location.href = redirectUrl
  }, 2000)
}

export default redirect
