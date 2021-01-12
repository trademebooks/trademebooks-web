import { connect } from 'react-redux'
import { getAccountByUsername } from '../../../actions/account'
import { getBookstoreByUsername } from '../../../actions/bookstore'
import PublicBookstore from './PublicBookstore'

const mapStateToProps = (state) => ({
  books: state.bookstore.books
})

const mapDispatchToProps = {
  getAccountByUsername,
  getBookstoreByUsername
}

export default connect(mapStateToProps, mapDispatchToProps)(PublicBookstore)
