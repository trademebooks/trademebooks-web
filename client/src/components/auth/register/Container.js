import { connect } from 'react-redux';
import { setAlert } from '../../../actions/alert';
import { register } from '../../../actions/auth';
import Register from './Register';

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {
  setAlert,
  register,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
