import { connect } from 'react-redux';
import { addBook } from '../../../../actions/book';
import SearchBooks from './SearchBooks';

const mapStateToProps = (state) => ({
  book: state.book.book
});

const mapDispatchToProps = {
  addBook
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBooks);
