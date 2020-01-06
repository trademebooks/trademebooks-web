import React, {Component} from "react";
import Autosuggest from 'react-autosuggest';
import '../css/buybooks.css';
import {MDBAnimation, MDBCol, MDBContainer, MDBMedia, MDBRow} from "mdbreact";

// library: https://react-autosuggest.js.org/
// CodePen examples:
// 1. Get suggestions asynchronously https://codepen.io/moroshko/pen/EPZpev
// 2. Custom render https://codepen.io/moroshko/pen/PZWbzK

/* ---------- */
/*    Data    */
/* ---------- */

const languages = [
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

function getSuggestionValue(suggestion) {
    return suggestion.name;
}

function renderSuggestion(suggestion) {
    return (
        <span>{suggestion.name}</span>
    );
}

class BuyBooks extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: '',
            suggestions: [],
            isLoading: false
        };

        this.lastRequestId = null;
    }

    loadSuggestions(value) {
        // Cancel the previous request
        if (this.lastRequestId !== null) {
            clearTimeout(this.lastRequestId);
        }

        this.setState({
            isLoading: true
        });

        console.log(getMatchingLanguages(value));

        // Fake request
        this.lastRequestId = setTimeout(() => {
            this.setState({
                isLoading: false,
                suggestions: getMatchingLanguages(value)
            });
        }, 1000);
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

    render() {
        const {value, suggestions, isLoading} = this.state;
        const inputProps = {
            placeholder: "Type 'c'",
            value,
            onChange: this.onChange
        };
        const status = (isLoading ? 'Loading...' : 'Type to load suggestions');

        const items = [];
        for (let i = 0; i < 10; i++) {
            items.push(
                <MDBAnimation type="fadeIn" duration="500ms">
                    <MDBContainer className="mt-4">
                        <MDBRow center={true}>
                            <MDBCol md="12">
                                <MDBMedia>
                                    <MDBMedia left className="mr-3" href="#">
                                        <MDBMedia object
                                                  src="https://mdbootstrap.com/img/Photos/Others/placeholder1.jpg"
                                                  alt=""/>
                                    </MDBMedia>
                                    <MDBMedia body>
                                        <MDBMedia heading>
                                            Media heading
                                        </MDBMedia>
                                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                            ante
                                            sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
                                            viverra
                                            turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec
                                            lacinia congue
                                            felis in faucibus.
                                        </p>
                                    </MDBMedia>
                                </MDBMedia>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBAnimation>
            );
        }

        return (
            <div className="mt-4">
                <MDBContainer>
                    <MDBRow center={true}>
                        <MDBCol md="">
                            <div className="text-center">
                                <h1>Buy Books</h1>
                            </div>
                            <div>
                                <Autosuggest
                                    suggestions={suggestions}
                                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                                    getSuggestionValue={getSuggestionValue}
                                    renderSuggestion={renderSuggestion}
                                    inputProps={inputProps}/>
                            </div>
                            <div>
                                {items}
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        );
    }
}

export default BuyBooks;