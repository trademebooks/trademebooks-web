import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  // if (isAuthenticated) {
    return <Redirect to='/buy-books' />;
  // }

  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>Trade Me Books</h1>
          <p className='lead'>
            Having trouble finding the course textbook? Tired of buying new textbooks for a premium price? Use Trade Me Books to buy and sell textbooks for all your classes!
          </p>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              Buy Books
            </Link>
            <Link to='/login' className='btn btn-light'>
              Sell Books
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
