import React, {Component} from 'react';
import {connect} from 'react-redux';

import './SearchBook.scss';
import '../../../css/global.css'

class SearchBook extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {

        return (
            <div id="search-book">
                <input id="search-input" type="text"/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(SearchBook);
