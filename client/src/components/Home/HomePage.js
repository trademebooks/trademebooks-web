import React, {Component} from "react";

import * as Constants from "../../utilities/Constants";
import axios from "axios";

import SecondarySearchBar from "./SecondarySearchBar.js";
import SingleResultCard from "./SingleResultCard.js";

import './HomePage.scss';

class HomePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            books: [],
            name: ""
        };

        this.onChangeSearchForItems = this.onChangeSearchForItems.bind(this);
    }

    onChangeSearchForItems(event) {
        let search_query = event.target.value;
        this.setState({
            name: search_query
        });

        if (search_query.length === 0) {
            axios
                .get(Constants.GET_ALL_PUBLIC_BOOKS_URL)
                .then((response) => {
                    let data = response.data.data;
                    this.setState({books: data});
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

        if (search_query.length > 2) {
            axios
                .get(Constants.GET_ALL_PUBLIC_BOOKS_URL + "?title=" + search_query)
                .then((response) => {
                    let data = response.data.data;
                    this.setState({books: data});
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    componentDidMount() {
        axios
            .get(Constants.GET_ALL_PUBLIC_BOOKS_URL)
            .then((response) => {
                let data = response.data.data;
                console.log(data);

                this.setState({books: data});
            })
            .catch(function (error) {
                console.log(error);
            });
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
                            textbook technology - that is TMB
                        </div>

                        <div className="home-search-box">
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control"
                                           placeholder="Search book titles, authors, ISPNs, etc..."
                                           onChange={this.onChangeSearchForItems} value={this.state.name}/>
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
                                    <div className="mr-2"><span>Date</span><i
                                        className="material-icons md-18">arrow_upward</i></div>

                                    <div className="mr-2"><span>Price</span><i
                                        className="material-icons md-18">arrow_upward</i></div>

                                    <div className="mr-2"><span>Condition</span><i
                                        className="material-icons md-18">arrow_drop_down</i></div>
                                </div>

                                <div className="d-flex">
                                    <SecondarySearchBar placeholder="School"/>

                                    <SecondarySearchBar placeholder="Course Code"/>
                                </div>

                                <div className="flex-grow-1">&nbsp;</div>

                                <div className="d-flex">
                                    <div className="mr-4"><a href="/">All</a></div>
                                    <div className="mr-4"><a href="/">Single Books</a></div>
                                    <div className="mr-4"><a href="/">Bundles</a></div>
                                </div>
                            </div>
                            {/* ---------- Toolbar --- end ---------- */}

                            <div className="row">
                                <span className="number-of-results">Showing {this.state.books.length} Results</span>
                            </div>

                            <div>
                                {this.state.books.map((book, index) => {
                                    return <SingleResultCard key={book.id} book={book}/>
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
