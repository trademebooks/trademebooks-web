// import { toastr } from 'react-redux-toastr'

const redirect = (redirectUrl, delay = 1500) => {
  setTimeout(() => {
    window.location.href = redirectUrl
  }, 2000)
}

export default redirect
