import React from 'react'
import ReduxToastr from 'react-redux-toastr'

const Alert = () => {
  return (
    <ReduxToastr
      timeOut={3000}
      newestOnTop={false}
      preventDuplicates
      position="top-right"
      getState={(state) => state.toastr}
      transitionIn="fadeIn"
      transitionOut="fadeOut"
      closeOnToastrClick
    />
  )
}

export default Alert
