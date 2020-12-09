import { connect } from 'react-redux'
import { login } from '../../../actions/auth'
import LoginForm from './LoginForm'

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
})

const mapDispatchToProps = {
  login
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
