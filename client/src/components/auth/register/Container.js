import { connect } from 'react-redux'
import { register } from '../../../actions/auth'
import Register from './Register'

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
})

const mapDispatchToProps = {
  register
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
