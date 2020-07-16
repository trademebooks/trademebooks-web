import {MDBBtn, MDBCol, MDBIcon, MDBInput, MDBRow} from 'mdbreact';
import React, {useState} from 'react';
import Autosuggest from "react-autosuggest";
import {useDispatch} from 'react-redux';
import {addBookToUser} from '../../actions/book';
import defaultBookImage from '../../images/defaultBook.jpg';

export const SellBooks = () => {
    const dispatch = useDispatch();
    const [value,
        setValue] = useState("");
    const [suggestions,
        setSuggestions] = useState([]);
    const [formData,
        setFormData] = useState({
        bookTitle: '',
        bookAuthors: '',
        bookImage: defaultBookImage,
        bookPublishedDate: '',
        bookPublisher: '',
        bookPrice: '',
        bookLocationForMeet: '',
        isLoading: false,

        fname: '',
        lname: '',
        email: '',
        city: '',
        state: '',
        zip: ''
    });

    const clearForm = event => {
        event.preventDefault();

        setFormData({
            ...formData,
            bookTitle: '',
            bookAuthors: '',
            bookImage: defaultBookImage,
            bookPublishedDate: '',
            bookPublisher: '',
            bookLocationForMeet: '',
            bookPrice: ''
        })
    };
    const submitHandler = async event => {
        event.preventDefault();
        event.target.className += ' was-validated';

        const {
            bookTitle,
            bookAuthors,
            bookImage,
            bookPublishedDate,
            bookPublisher,
            bookLocationForMeet,
            bookPrice
        } = formData

        let data = {
            bookTitle,
            bookAuthors,
            bookImage,
            bookPublishedDate,
            bookPublisher,
            bookLocationForMeet,
            bookPrice
        };
        dispatch(addBookToUser(data))

    };

    const changeHandler = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };
    const loadSuggestions = (value) => {
        setFormData({
            ...formData,
            isLoading: true
        });
        const thisRequest = fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}&key=AIzaSyCpl497dKbKN-piJBJJ5zOf3sCPk7CKuJg`)
            .then(res => res.json())
            .then(res => {
                let volumes = res.items;
                let books = volumes.map((book) => {
                    let {volumeInfo} = book;
                    return {
                        bookTitle: volumeInfo.title,
                        bookAuthors: volumeInfo.authors,
                        bookImage: (volumeInfo.imageLinks !== undefined && volumeInfo.imageLinks.thumbnail && volumeInfo.imageLinks.thumbnail)
                            ? volumeInfo.imageLinks.thumbnail
                            : "default",
                        bookPublishedDate: volumeInfo.publishedDate,
                        bookPublisher: volumeInfo.publisher
                    }
                });
                let suggestions = books;
                // let suggestions = []; If this is true there's a newer request happening, stop
                // everything console.log(res.items); If this is executed then it's the latest
                // request

                setSuggestions(suggestions);
            })
            .catch(e => {
                console.log(e)
            })
    }

    const onSuggestionsFetchRequested = ({value}) => {
        loadSuggestions(value);
    };

    return (
        <div className="container">
            <div className="mt-4 justify-content-center">
                <div>
                    <h1>Sell Books</h1>
                    <div>
                        <Autosuggest
                            suggestions={suggestions}
                            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                            onSuggestionsClearRequested={() => setSuggestions([])}
                            getSuggestionValue={suggestion => suggestion.bookTitle}
                            renderSuggestion={renderSuggestion}
                            inputProps={{
                            value: value,
                            placeholder: "Search Book Name, ISBN, Author, etc...",
                            onChange: (_, {newValue, method}) => {
                                setValue(newValue);
                            }
                        }}/>
                    </div>
                </div>
            </div>

            <div className="mt-4">
                <form className='needs-validation' onSubmit={submitHandler} noValidate>
                    <MDBRow>
                        <MDBCol md='6'>
                            <MDBInput
                                icon='book'
                                value={formData.bookTitle}
                                name='bookTitle'
                                onChange={changeHandler}
                                type='text'
                                id='materialFormRegisterNameEx1'
                                label='Book Title'
                                outline
                                required>
                                <small className='form-text text-muted'>
                                    Ex. Romeo and Juliet
                                </small>
                                <div className='valid-feedback ml-3 pl-3'>Looks good!</div>
                            </MDBInput>
                        </MDBCol>
                        <MDBCol md='6'>
                            <MDBInput
                                icon='user'
                                value={formData.bookAuthors}
                                name='bookAuthors'
                                onChange={changeHandler}
                                type='text'
                                id='materialFormRegisterEmailEx2'
                                label='Author(s)'
                                outline
                                required>
                                <small className='form-text text-muted'>
                                    Ex. William Shakespeare
                                </small>
                                <div className='valid-feedback ml-3 pl-3'>Looks good!</div>
                            </MDBInput>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol md='6'>
                            <MDBInput
                                icon='calendar-times'
                                value={formData.bookPublishedDate}
                                onChange={changeHandler}
                                type='text'
                                id='materialFormRegisterPasswordEx3'
                                name='bookPublishedDate'
                                label='Published Date'
                                outline
                                required>
                                <small className='form-text text-muted'>
                                    Ex. 1595
                                </small>
                                <div className='invalid-feedback ml-3 pl-3'>
                                    Please provide a valid city.
                                </div>
                                <div className='valid-feedback ml-3 pl-3'>Looks good!</div>
                            </MDBInput>
                        </MDBCol>
                        <MDBCol md='6'>
                            <MDBInput
                                icon='building'
                                value={formData.bookPublisher}
                                onChange={changeHandler}
                                type='text'
                                id='materialFormRegisterPasswordEx4'
                                name='bookPublisher'
                                label='Publisher'
                                outline
                                required>
                                <small className='form-text text-muted'>
                                    Ex. Simon & Schuster
                                </small>
                                <div className='invalid-feedback ml-3 pl-3'>
                                    Please provide a valid state.
                                </div>
                                <div className='valid-feedback ml-3 pl-3'>Looks good!</div>
                            </MDBInput>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol md='6'>
                            <MDBInput
                                icon='dollar-sign'
                                value={formData.bookPrice}
                                onChange={changeHandler}
                                type='text'
                                id='materialFormRegisterPasswordEx5'
                                name='bookPrice'
                                label='Price'
                                outline
                                required>
                                <small className='form-text text-muted'>
                                    Ex. 1337
                                </small>
                                <div className='invalid-feedback ml-3 pl-3'>
                                    Please provide a valid price for your book.
                                </div>
                                <div className='valid-feedback ml-3 pl-3'>Looks good!</div>
                            </MDBInput>
                        </MDBCol>
                        <MDBCol md='6'>
                            <MDBInput
                                icon='map-marker-alt'
                                value={formData.bookLocationForMeet}
                                onChange={changeHandler}
                                type='text'
                                id='materialFormRegisterPasswordEx6'
                                name='bookLocationForMeet'
                                label='Location To Meet'
                                outline
                                required>
                                <div className='invalid-feedback ml-3 pl-3'>
                                    Please provide a place to meet for your book listing.
                                </div>
                                <div className='valid-feedback ml-3 pl-3'>Looks good!</div>
                            </MDBInput>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol md='10'>
                            <h3><MDBIcon icon="image" className="mr-1"/>Book Image</h3>
                            <img
                                src={formData.bookImage}
                                alt="thumbnail"
                                className="img-thumbnail"
                                style={{
                                'width': '25%'
                            }}/>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol md='3'>
                            <MDBBtn color='primary' type='submit' className="mt-3">
                                Submit Form
                            </MDBBtn>
                        </MDBCol>

                        <MDBCol md='2'>
                            <MDBBtn color='secondary' type='submit' className="mt-3" onClick={clearForm}>
                                Clear Form
                            </MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </form>
            </div>

        </div>
    );
}

export default SellBooks;

function renderSuggestion(suggestion) {
    let authors = "";
    if (suggestion.bookAuthors && suggestion.bookAuthors.length > 0) {
        authors = suggestion
            .bookAuthors
            .join(", ");
    }

    return (
        <div className="d-flex">
            <div className="mr-2"><img
                src={suggestion.bookImage}
                height="220"
                width="150"
                alt="the book search result"/>
            </div>
            <div>
                <div className="font-weight-bold">{suggestion.bookTitle}</div>
                <div className="font-small">{authors}</div>
                <div className="font-small">{suggestion.bookPublishedDate}</div>
                <div className="font-small">{suggestion.bookPublisher}</div>
            </div>
        </div>
    );
}

// library: https://react-autosuggest.js.org/ CodePen examples:
// 1. Get suggestions asynchronously https://codepen.io/moroshko/pen/EPZpev
// 2. Custom render https://codepen.io/moroshko/pen/PZWbzK