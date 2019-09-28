import React, {Component} from "react";

import * as Constants from "../../utilities/Constants";
import axios from "axios";

import SearchBar from "./SearchBar.js"
import SecondarySearchBar from "./SecondarySearchBar.js";
import SingleResultCard from "./SingleResultCard.js";
import BundleCard from "./BundleCard";

import './HomePage.scss';

/**
 * 4 ways to create components
 * 1. createClass - ES6
 * 2. ES6 Class - ES6 Class syntax
 * 3. Function
 * 4. Arrow function
 *
 * 1.
 * var HelloWorld = React.createClass({
 *     render: function() {
 *         return (
 *             <h1>Hello World</h1>
 *         );
 *     }
 * });
 *
 * 2.
 * class HelloWorld extends React.Component {
 *      constructor(props) {
 *          super(props);
 *      }
 *
 *      render() {
 *          return (
 *             <h1>Hello World</h1>
 *          );
 *      }
 * }
 *
 * 3.
 * function HelloWorld(props) {
 *     return (
 *         <h1>Hello World</h1>
 *     );
 * }
 *
 * 4.
 * const HelloWorld = (props) => <h1>Hello World</h1>
 *
 */
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

        console.log(search_query);

        if (search_query.length > 2) {
            let url = "https://www.googleapis.com/books/v1/volumes?key=AIzaSyCpl497dKbKN-piJBJJ5zOf3sCPk7CKuJg&q=";
            axios
                .get(url + search_query)
                .then((response) => {
                    let data = response.data;
                    let items = data.items;
                    let books = items.map(book => {
                        return {
                            book_title: book["volumeInfo"]["title"],
                            book_authors: book["volumeInfo"]["authors"],
                            book_publisher: book["volumeInfo"]["publisher"],
                            book_description: book["volumeInfo"]["description"],
                            book_image: book["volumeInfo"]["imageLinks"]
                        };
                    });
                    console.log(books);

                    this.setState({books: books});
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    };

    componentDidMount() {
        axios
            .get(Constants.GET_ALL_PUBLIC_BOOKS_URL)
            .then((response) => {
                let data = response.data;
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

                        <div>{this.state.name}</div>


                        <ul>
                            {this.state.books.map((book, index) => {
                                return <li key={index}>{book.book_title}</li>
                            })}
                        </ul>
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
                                <span className="number-of-results">Showing 47 Results</span>
                            </div>

                            <div className="row">
                                <SingleResultCard/>
                            </div>

                            <div className="row">
                                <BundleCard/>
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
