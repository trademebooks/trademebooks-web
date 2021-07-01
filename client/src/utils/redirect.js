const redirect = (redirectUrl, delayTimeMs = 1500) => {
  setTimeout(() => {
    window.location.href = redirectUrl
  }, delayTimeMs)
}

export default redirect
