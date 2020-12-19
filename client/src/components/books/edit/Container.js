import { connect } from 'react-redux'

import {
  addEditBook as addBook,
  getBook,
  updateBook
} from '../../../actions/bookstore'

import EditBookForm from './EditBookForm'

const mapStateToProps = (state) => ({
  book: state.bookstore.editBook
})

const mapDispatchToProps = {
  addBook,
  getBook,
  updateBook
}

export default connect(mapStateToProps, mapDispatchToProps)(EditBookForm)
