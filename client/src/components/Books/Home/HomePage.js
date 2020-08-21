import React, { Component } from "react";

import axios from "axios";

import SingleResultCard from "./Card/SingleResultCard.js";

import './HomePage.scss';

class HomePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            books: [],
            name: "",
            priceSort: "arrow_downward",
            dateSort: "arrow_downward"
        };

        this.onChangeSearchForItems = this.onChangeSearchForItems.bind(this);
        this.onClickSortByPrice = this.onClickSortByPrice.bind(this);
        this.onClickSortByDate = this.onClickSortByDate.bind(this);
    }

    onChangeSearchForItems(event) {
        let search_query = event.target.value;
        this.setState({
            name: search_query
        });

        if (search_query.length === 0) {
            axios
                .get('/api/v1/books')
                .then((response) => {
                    let data = response.data.data;
                    this.setState({ books: data });
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

        if (search_query.length > 2) {
            axios
                .get('/api/v1/books' + "?title=" + search_query)
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
                let data = response.data.data;
                console.log(data);

                this.setState({ books: data });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    onClickSortByPrice(event) {
        if (this.state.priceSort === "arrow_downward") {
            this.setState({ priceSort: "arrow_upward" });

            this.state.books.sort(function (a, b) {
                if (a.price === b.price) {
                    return 0;
                } else if (a.price > b.price) {
                    return 1;
                } else {
                    return -1
                }
            });
        } else {
            this.setState({ priceSort: "arrow_downward" });

            this.state.books.sort(function (a, b) {
                if (a.price === b.price) {
                    return 0;
                } else if (a.price > b.price) {
                    return -1;
                } else {
                    return 1
                }
            });
        }
    }

    onClickSortByDate(event) {
        if (this.state.dateSort === "arrow_downward") {
            this.setState({ dateSort: "arrow_upward" });
            this.state.books.sort(function (a, b) {
                var key1 = new Date(a.datePublished);
                var key2 = new Date(b.datePublished);
                if (key1 < key2) {
                    return 1;
                } else if (key1 === key2) {
                    return 0;
                } else {
                    return -1;
                }
            });
        } else {
            this.setState({ dateSort: "arrow_downward" });
            this.state.books.sort(function (a, b) {
                var key1 = new Date(a.datePublished);
                var key2 = new Date(b.datePublished);
                if (key1 < key2) {
                    return -1;
                } else if (key1 === key2) {
                    return 0;
                } else {
                    return 1;
                }
            });
        }
    }

    render() {
        return (
            <div className="home-page-container">
                <div>
                    {/* ---------- home page top section --- start ---------- */}
                    <section className="home-page-top-section">
                        <div className="home-page-top-section__main-text">
                            <span>Buy & Sell Textbooks from Canada’s <b>35+</b> Universities and Colleges</span>
                        </div>

                        <div className="home-page-top-section__small-caption mt-4">
                            Imagine buying and selling textbooks with ease and with minimal effort, using the latest in
                            textbook technology - that is TMB.
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

                        <div className="home-page-main-section__container pt-3">
                            {/* ---------- Toolbar --- start ---------- */}
                            <div className="row">
                                <div className="d-flex">
                                    <div className="mr-2 date-sort" onClick={this.onClickSortByDate}>
                                        <span>Date</span>
                                        <i className="material-icons md-18">{this.state.dateSort}</i>
                                    </div>

                                    <div className="mr-2 price-sort" onClick={this.onClickSortByPrice}>
                                        <span>Price</span>
                                        <i className="material-icons md-18">{this.state.priceSort}</i>
                                    </div>

                                    {/*<div className="mr-2"><span>Condition</span><i className="material-icons md-18">arrow_drop_down</i></div>*/}
                                </div>
                                {/*
                                <div className="d-flex">
                                    <SecondarySearchBar placeholder="School"/>

                                    <SecondarySearchBar placeholder="Course Code"/>
                                </div>

                                <div className="flex-grow-1">&nbsp;</div>

                                <div className="d-flex">
                                    <div className="mr-4"><a href="/">All</a></div>
                                    <div className="mr-4"><a href="/">Single Books</a></div>
                                    <div className="mr-4"><a href="/">Bundles</a></div>
                                </div>*/}
                            </div>
                            {/* ---------- Toolbar --- end ---------- */}

                            <div className="row mt-5">
                                <span className="number-of-results">Showing {this.state.books.length} Results</span>
                            </div>

                            <div>
                                {this.state.books.map((book, index) => {
                                    return <SingleResultCard key={book.id} book={book} />
                                })}
                            </div>
                        </div>
                    </section>

                    {/* main section --- end ------------------------------------------------------ */}
                </div>
            </div>
        );
    }
}

export default HomePage;
