import { connect } from 'react-redux';
import { addBook } from '../../../../actions/book';
import PostBookForm from './PostBookForm';

const mapStateToProps = (state) => ({
  book: state.book.book,
});

const mapDispatchToProps = {
  addBook,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostBookForm);
