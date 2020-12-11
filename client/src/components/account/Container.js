import { connect } from 'react-redux'
import {
  getAccountSettings,
  saveAccountSettings,
  updateAuthUser
} from '../../actions/account'

import Account from './Account'

const mapStateToProps = (state) => ({
  auth: state.auth
})

const mapDispatchToProps = {
  getAccountSettings,
  saveAccountSettings,
  updateAuthUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Account)
