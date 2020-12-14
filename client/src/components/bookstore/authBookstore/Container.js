import { connect } from 'react-redux'
import { getBookstoreByUsername } from '../../../actions/bookstore'
import AuthBookstore from './AuthBookstore'

const mapStateToProps = (state) => ({
  books: state.bookstore.books
})

const mapDispatchToProps = {
  getBookstoreByUsername
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthBookstore)
