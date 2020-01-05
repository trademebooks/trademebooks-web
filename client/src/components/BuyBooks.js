import React, {Component} from "react";
import Autosuggest from 'react-autosuggest';
import '../css/buybooks.css';

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

        return (
            <div class="flex-center">
                <div className="mt-4 justify-content-center">
                    {/*                <div className="status">
                    <strong>Status:</strong> {status}
                </div>*/}

                    <div className="text-center">
                        <h1>Buy Books</h1>
                        <div>
                            <Autosuggest
                                suggestions={suggestions}
                                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                                getSuggestionValue={getSuggestionValue}
                                renderSuggestion={renderSuggestion}
                                inputProps={inputProps}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default BuyBooks;