import {MDBAnimation, MDBCol, MDBMedia} from "mdbreact";
import React from "react";
import Proptypes from 'prop-types';

/**
 "user_id": "1",
 "title": "Book #4 - Fire",
 "description": "This is a great description fo the book.",
 "authors": [
 "John Doe",
 "Jane Doe",
 "Henry The 3rd"
 ],
 "condition": "Good",
 "location": "UofT",
 "price": 100,
 "image": "https://images-na.ssl-images-amazon.com/images/I/51KEJAS5ABL._AC_SY445_.jpg",
 "date_posted": "Jan 7, 2020",
 "publisher_date": "",
 "publisher": "",
 "_id": "5e15974918497b214849cd66",
 "__v": 0
 */
export const SingleBook = ({book}) => {

    return (
        <MDBCol md="12" className="mt-3">
            <MDBAnimation type="fadeIn" duration="500ms">
                <MDBMedia>
                    <MDBMedia left className="mr-3" href="#">
                        <MDBMedia object src={book.image} alt="" className="single-book-image-size"/>
                    </MDBMedia>
                    <MDBMedia body>
                        <h4>{book.title}</h4>
                        <p className="m-0">Price: {book.price}</p>
                        <p className="m-0">Condition: {book.condition}</p>
                        <p className="m-0">Location: {book.location}</p>
                        <p className="m-0">Date: {book.date_posted}</p>
                    </MDBMedia>
                </MDBMedia>
            </MDBAnimation>
        </MDBCol>
    );
}
SingleBook.propTypes = {
    book: Proptypes.shape({price: Proptypes.number, condition: Proptypes.string, location: Proptypes.string, date: Proptypes.string})
}

export default SingleBook;