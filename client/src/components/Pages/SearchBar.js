import React from "react";

import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"

import '../../css/SearchBar.css';

const SearchBar = (props) => (
    <div className="search-bar">
        <InputGroup className="mb-3">
            <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">
                    <i class="material-icons md-18">search</i>
                </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
                placeholder="Search book titles, authors, ISPNs, etc"
                aria-label="search"
                aria-describedby="basic-addon1"/>
        </InputGroup>
    </div>
);

export default SearchBar;