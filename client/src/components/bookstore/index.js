import React, { useEffect, useState } from 'react';
import { MDBRow, MDBCol, MDBContainer } from 'mdbreact';
import axios from 'axios';

import Books from '../books/common/Books';

const BookStore = ({ match }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/v1/bookstores/${match.params.username}`)
      .then((response) => {
        setBooks(response.data.data.books);
      })
      .catch(function (error) {
        console.log({ error });
      });
  }, [])

  return (
    <>
      <div className="header-container text-center">
        <h3 className="font-weight-bold">Welcome to {match.params.username}'s Bookstore</h3>
      </div>
      <div className="mt-4">
        <MDBContainer>
          <MDBRow center={true}>
            <MDBCol>
              {/* ---------- main section --- start ---------- */}
              <section className="home-page-main-section__container">
                <Books books={books} />
              </section>
              {/* ---------- main section --- end ------------ */}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
};

export default BookStore;
