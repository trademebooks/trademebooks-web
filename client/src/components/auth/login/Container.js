import { connect } from 'react-redux';
import { login } from '../../../actions/auth';
import Login from './Login';

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = {
  login
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
