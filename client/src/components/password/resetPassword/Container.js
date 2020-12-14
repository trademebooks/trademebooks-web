import { connect } from 'react-redux'
import { resetPassword } from '../../../actions/password'
import PasswordResetForm from './PasswordResetForm'

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
})

const mapDispatchToProps = {
  resetPassword
}

export default connect(mapStateToProps, mapDispatchToProps)(PasswordResetForm)
