import React, {Component} from 'react';
import Autosuggest from "react-autosuggest";
import {MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon} from 'mdbreact';

import defaultBookImage from '../images/defaultBook.jpg';

class SellBooks extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: '',
            suggestions: [],
            isLoading: false,

            fname: '',
            lname: '',
            email: '',
            city: '',
            state: '',
            zip: '',

            bookTitle: '',
            bookAuthors: '',
            bookImage: defaultBookImage,
            bookPublishedDate: '',
            bookPublisher: '',
            bookPrice: '',
            bookLocationForMeet: '',
        };

        this.lastRequestId = null;
    }


    clearForm = event => {
      event.preventDefault();

      this.setState({
          bookTitle: '',
          bookAuthors: '',
          bookImage: defaultBookImage,
          bookPublishedDate: '',
          bookPublisher: '',
          bookLocationForMeet: '',
          bookPrice: '',
      })
    };
    submitHandler = event => {
        event.preventDefault();
        event.target.className += ' was-validated';
    };

    changeHandler = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    loadSuggestions(value) {
        // Cancel the previous request
        /*        if (this.lastRequestId !== null) {
                    clearTimeout(this.lastRequestId);
                }*/

        this.setState({
            isLoading: true
        });

        // Fake request
        /*        this.lastRequestId = setTimeout(() => {
                    this.setState({
                        isLoading: false,
                        suggestions: getMatchingLanguages(value)
                    });
                }, 1000);*/


        const thisRequest = this.latestRequest = fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}&key=AIzaSyCpl497dKbKN-piJBJJ5zOf3sCPk7CKuJg`)
            .then(res => res.json())
            .then(res => {
                let volumes = res.items;
                let books = volumes.map((book) => {
                    let {volumeInfo} = book;
                    return {
                        bookTitle: volumeInfo.title,
                        bookAuthors: volumeInfo.authors,
                        bookImage: (volumeInfo.imageLinks !== undefined && volumeInfo.imageLinks.thumbnail && volumeInfo.imageLinks.thumbnail) ? volumeInfo.imageLinks.thumbnail : "default",
                        bookPublishedDate: volumeInfo.publishedDate,
                        bookPublisher: volumeInfo.publisher
                    }
                });
                let suggestions = books;
                //let suggestions = [];

                // If this is true there's a newer request happening, stop everything
                if (thisRequest !== this.latestRequest) {
                    return;
                }

                //console.log(res.items);

                // If this is executed then it's the latest request
                this.setState({
                    suggestions: suggestions,
                    isLoading: false
                });
            }).catch(e => {
                console.log(e)
            })
    }

    onChange = (event, {newValue}) => {
        this.setState({
            value: newValue
        });
    };

    onSuggestionsFetchRequested = ({value}) => {
        this.loadSuggestions(value);
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };


    getSuggestionValue = (suggestion) => {
        //console.log(suggestion);
        //

        this.setState({
            ...suggestion
        });

        return suggestion.bookTitle;
    };

    render() {
        const {value, suggestions, isLoading} = this.state;
        const inputProps = {
            placeholder: "Search Book Name, ISBN, Author, etc...",
            value,
            onChange: this.onChange
        };
        const status = (isLoading ? 'Loading...' : 'Type to load suggestions');

        return (
            <div className="container">
                <div className="mt-4 justify-content-center">
                    <div>
                        <h1>Sell Books</h1>
                        <div>
                            <Autosuggest
                                suggestions={suggestions}
                                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                                getSuggestionValue={this.getSuggestionValue}
                                renderSuggestion={renderSuggestion}
                                inputProps={inputProps}/>
                        </div>
                    </div>
                </div>


                <div className="mt-4">
                    <form
                        className='needs-validation'
                        onSubmit={this.submitHandler}
                        noValidate
                    >
                        <MDBRow>
                            <MDBCol md='6'>
                                <MDBInput
                                    icon='book'
                                    value={this.state.bookTitle}
                                    name='bookTitle'
                                    onChange={this.changeHandler}
                                    type='text'
                                    id='materialFormRegisterNameEx1'
                                    label='Book Title'
                                    outline
                                    required
                                >
                                    <small className='form-text text-muted'>
                                        Ex. Romeo and Juliet
                                    </small>
                                    <div className='valid-feedback ml-3 pl-3'>Looks good!</div>
                                </MDBInput>
                            </MDBCol>
                            <MDBCol md='6'>
                                <MDBInput
                                    icon='user'
                                    value={this.state.bookAuthors}
                                    name='bookAuthors'
                                    onChange={this.changeHandler}
                                    type='text'
                                    id='materialFormRegisterEmailEx2'
                                    label='Author(s)'
                                    outline
                                    required
                                >
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
                                    value={this.state.bookPublishedDate}
                                    onChange={this.changeHandler}
                                    type='text'
                                    id='materialFormRegisterPasswordEx3'
                                    name='bookPublishedDate'
                                    label='Published Date'
                                    outline
                                    required
                                >
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
                                    value={this.state.bookPublisher}
                                    onChange={this.changeHandler}
                                    type='text'
                                    id='materialFormRegisterPasswordEx4'
                                    name='bookPublisher'
                                    label='Publisher'
                                    outline
                                    required
                                >
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
                                    value={this.state.bookPrice}
                                    onChange={this.changeHandler}
                                    type='text'
                                    id='materialFormRegisterPasswordEx5'
                                    name='bookPrice'
                                    label='Price'
                                    outline
                                    required
                                >
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
                                    value={this.state.bookLocationForMeet}
                                    onChange={this.changeHandler}
                                    type='text'
                                    id='materialFormRegisterPasswordEx6'
                                    name='bookLocationForMeet'
                                    label='Location To Meet'
                                    outline
                                    required
                                >
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
                                <img src={this.state.bookImage} alt="thumbnail" className="img-thumbnail" style={{'width': '25%'}}/>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow>
                            <MDBCol md='3'>
                                <MDBBtn color='primary' type='submit' className="mt-3">
                                    Submit Form
                                </MDBBtn>
                            </MDBCol>

                            <MDBCol md='2'>
                                <MDBBtn color='secondary' type='submit' className="mt-3" onClick={this.clearForm}>
                                    Clear Form
                                </MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </form>
                </div>

            </div>
        );
    }
}

export default SellBooks;


/* ---------- */
/*    Data    */
/* ---------- */
var languages = [
    {
        name: 'C',
        year: 1972
    },
    {
        name: 'C#',
        year: 2000
    },
    {
        name: 'C++',
        year: 1983
    },
    {
        name: 'Clojure',
        year: 2007
    },
    {
        name: 'Elm',
        year: 2012
    },
    {
        name: 'Go',
        year: 2009
    },
    {
        name: 'Haskell',
        year: 1990
    },
    {
        name: 'Java',
        year: 1995
    },
    {
        name: 'Javascript',
        year: 1995
    },
    {
        name: 'Perl',
        year: 1987
    },
    {
        name: 'PHP',
        year: 1995
    },
    {
        name: 'Python',
        year: 1991
    },
    {
        name: 'Ruby',
        year: 1995
    },
    {
        name: 'Scala',
        year: 2003
    }
];

function getMatchingLanguages(value) {
    const escapedValue = escapeRegexCharacters(value.trim());

    if (escapedValue === '') {
        return [];
    }

    const regex = new RegExp('^' + escapedValue, 'i');

    return languages.filter(language => regex.test(language.name));
}

/* ----------- */
/*    Utils    */
/* ----------- */

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/* --------------- */
/*    Component    */

/* --------------- */


function renderSuggestion(suggestion) {
    let authors = "";
    if (suggestion.bookAuthors && suggestion.bookAuthors.length > 0) {
        authors = suggestion.bookAuthors.join(", ");
    }

    //console.log(authors);

    return (
        <div className="d-flex">
            <div className="mr-2"><img src={suggestion.bookImage} height="220" width="150"
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