import React, {Component} from "react";
import '../../css/buybooks.css';
import {MDBAnimation, MDBCol, MDBContainer, MDBMedia, MDBRow} from "mdbreact";
import SingleBook from "./SingleBook";

class BuyBooks extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchTerm: "",
            books: []
        };
    }

    componentDidMount() {
        fetch(`/api/books`)
            .then(res => res.json())
            .then((response) => {
                let books = response;
                this.setState({
                    books
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    onChangeSearchForItems = (event) => {
        let search_query = event.target.value;
        this.setState({
            searchTerm: search_query
        });

        if (search_query.length === 0) {
            fetch(`/api/books?search=${search_query}`)
                .then(res => res.json())
                .then((response) => {
                    let books = response;
                    this.setState({
                        books
                    });
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

        if (search_query.length > 2) {
            fetch(`/api/books?search=${search_query}`)
                .then(res => res.json())
                .then((response) => {
                    let books = response;
                    this.setState({
                        books
                    });
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    };

    render() {
        return (
            <div className="mt-4">
                <MDBContainer>
                    <MDBRow center={true}>
                        <MDBCol md="">
                            <div className="text-center">
                                <h1>Buy Books</h1>
                            </div>

                            <div className="m-3">
                                <form>
                                    <div className="form-group">
                                        <input type="text" className="form-control"
                                               placeholder="Search Book Titles, Authors, ISBN Numbers, Schools, and Course Codes..."
                                               onChange={this.onChangeSearchForItems} value={this.state.name}/>
                                    </div>
                                </form>
                            </div>

                            <div>
                                <MDBContainer className="mt-4">
                                    <MDBRow>
                                        {this.state.books.map((book, index) => {
                                            return <SingleBook key={book._id} book={book}/>
                                        })}
                                    </MDBRow>
                                </MDBContainer>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        );
    }
}

export default BuyBooks;