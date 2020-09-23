import React, { useState, useEffect } from 'react';

import api from '../../../utils/api';
import Books from '../common/Books';

import './home.scss';
import Jumbotron from './Jumbotron';

const HomePage = () => {
  const [books, setBooks] = useState([]);

  const onChangeSearchBooks = async (event) => {
    let searchQuery = event.target.value;
    if (searchQuery.length > 2) {
      try {
        const response = await api.get('/books?title=' + searchQuery)
        const books = response.data.data;
        setBooks(books);
      }
      catch (error) {
        console.log({ error });
      }
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get('/books');
        const books = response.data.data;
        setBooks(books);
      }
      catch (error) {
        console.log({ error });
      }
    })();
  }, []);

  return (
    <>
      <div className="home-page-container">
        <div>
          <section className="home-page-top-section">
            <Jumbotron onChangeSearchBooks={onChangeSearchBooks} />
          </section>
          <section className="home-page-main-section__container">
            <Books books={books} />
          </section>
        </div>
      </div>
    </>
  );
};

export default HomePage;
