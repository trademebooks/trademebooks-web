import React, { useState, useEffect } from "react";

import axios from "axios";

import SingleBook from "../common/SingleBook.js";

import './home.scss';

const HomePage = () => {
    const [books, setBooks] = useState([]);

    const onChangeSearchForItems = (event) => {
        let search_query = event.target.value;
        if (search_query.length > 2) {
            axios
                .get('/api/v1/books?title=' + search_query)
                .then((response) => {
                    let books = response.data.data;
                    setBooks(books);
                })
                .catch(function (error) {
                    console.log({ error });
                });
        }
    }

    useEffect(() => {
        axios
            .get('/api/v1/books')
            .then((response) => {
                let books = response.data.data;
                setBooks(books);
            })
            .catch(function (error) {
                console.log({ error });
            });
    }, [])

    return (
        <>
            <div className="home-page-container">
                <div>
                    {/* ---------- home page top section --- start ---------- */}
                    <section className="home-page-top-section">
                        <div className="home-page-top-section__main-text">
                            <span>Buy & Sell Textbooks from Canada’s <b>35+</b> Universities and Colleges</span>
                        </div>

                        <div className="home-page-top-section__small-caption mt-4">
                            Buying and sell textbooks with ease and with minimal effort using the latest technology!
                        </div>

                        <div className="home-search-box">
                            <form>
                                <div className="form-group">
                                    <input type="text"
                                        className="form-control"
                                        placeholder="Search book titles, authors, ISBN numbers, schools, and course codes..."
                                        onChange={onChangeSearchForItems} />
                                </div>
                            </form>
                        </div>
                    </section>
                    {/* ---------- home page top section --- end ---------- */}

                    {/* ---------- main section --- start ---------- */}
                    <section className="home-page-main-section">
                        <div>
                            {books.map((book, index) => {
                                return <SingleBook key={book._id} book={book} />
                            })}
                        </div>
                    </section>
                    {/* ---------- main section --- end ------------ */}
                </div>
            </div>
        </>
    );
}

export default HomePage;
