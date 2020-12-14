import { connect } from 'react-redux'
import { sendPasswordResetEmail } from '../../../actions/password'
import PasswordSendEmailForm from './PasswordSendEmailForm'

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
})

const mapDispatchToProps = {
  sendPasswordResetEmail
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PasswordSendEmailForm)
