import { connect } from 'react-redux'
import ChatShell from './ChatShell'

const mapStateToProps = (state) => ({
  auth: state.auth
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ChatShell)
