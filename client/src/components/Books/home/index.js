import React, { Component } from "react";

import axios from "axios";

import SingleResultCard from "../common/SingleResultCard.js";

import './home.scss';

class HomePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            books: []
        };

        this.onChangeSearchForItems = this.onChangeSearchForItems.bind(this);
    }

    onChangeSearchForItems(event) {
        let search_query = event.target.value;
        if (search_query.length > 2) {
            console.log(search_query)
            axios
                .get('/api/v1/books?title=' + search_query)
                .then((response) => {
                    let data = response.data.data;
                    this.setState({ books: data });
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    componentDidMount() {
        axios
            .get('/api/v1/books')
            .then((response) => {
                let books = response.data.data;
                console.log({ books });

                this.setState({ books });
            })
            .catch(function (error) {
                console.log({ error });
            });
    }

    render() {
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
                                        <input type="text" className="form-control"
                                            placeholder="Search book titles, authors, ISBN numbers, schools, and course codes."
                                            onChange={this.onChangeSearchForItems} value={this.state.name} />
                                    </div>
                                </form>
                            </div>
                        </section>
                        {/* ---------- home page top section --- end ---------- */}

                        {/* ---------- main section --- start ---------- */}
                        <section className="home-page-main-section">
                            <div>
                                {this.state.books.map((book, index) => {
                                    return <SingleResultCard key={book._id} book={book} />
                                })}
                            </div>
                        </section>
                        {/* ---------- main section --- end ------------ */}
                    </div>
                </div>
            </>
        );
    }
}

export default HomePage;
