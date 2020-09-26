import { connect } from 'react-redux';
import PostBookForm from './PostBookForm';

const mapStateToProps = (state) => ({
  book: state.book.book
});

const mapDispatchToProps = {

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostBookForm);
