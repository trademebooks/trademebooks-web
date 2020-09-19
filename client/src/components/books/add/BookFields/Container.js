import { connect } from 'react-redux';
import { addBook, createBook } from '../../../../actions/book';
import BookFields from './BookFields';

const mapStateToProps = (state) => ({
  book: state.book.book
});

const mapDispatchToProps = {
  addBook,
  createBook
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookFields);
