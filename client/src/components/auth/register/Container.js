import { connect } from 'react-redux'
import { register } from '../../../actions/auth'
import RegisterForm from './RegisterForm'

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
})

const mapDispatchToProps = {
  register
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)
