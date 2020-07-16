import {MDBCol, MDBContainer, MDBRow} from "mdbreact";
import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import {fetchBooksByQuery} from "../../actions/book";
import '../../css/buybooks.css';
import SingleBook from "./SingleBook";

export const BuyBooks = () => {
    const books = useSelector(state => state.books.entities);
    const hasErrors = useSelector(state => state.books.hasErrors)
    const dispatch = useDispatch();
    const onChangeSearchForItems = async(event) => {
        let search_query = event.target.value;
        if (!hasErrors) {
            if (search_query.length == 0 || search_query.length == 1) {
                const resultAction = dispatch(fetchBooksByQuery(search_query))
            }
        }
    };

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
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search Book Titles, Authors, ISBN Numbers, Schools, and Course Codes..."
                                        onChange={onChangeSearchForItems}/>
                                </div>
                            </form>
                        </div>

                        <div>
                            <MDBContainer className="mt-4">
                                <MDBRow>
                                    {books.map((book, index) => {
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

export default BuyBooks;