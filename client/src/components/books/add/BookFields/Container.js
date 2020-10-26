import { connect } from 'react-redux'
import { addBook, createBook } from '../../../../actions/book'
import { updateBook } from '../../../../actions/bookstore'
import BookFields from './BookFields'

const mapStateToProps = (state) => ({
  book: state.book.book
})

const mapDispatchToProps = {
  addBook,
  createBook,
  updateBook
}

export default connect(mapStateToProps, mapDispatchToProps)(BookFields)
