import { connect } from 'react-redux';
import { getBook } from '../../../../actions/book';
import BookFields from './BookFields';

const mapStateToProps = (state) => ({
  book: state.book.book
});

const mapDispatchToProps = {
    getBook
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookFields);
