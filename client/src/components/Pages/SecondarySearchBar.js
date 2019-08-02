import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
import React from "react";
import '../../css/SecondarySearchBar.css';
const SecondarySearchBar = (props) => <div className="secondary-search">
    <InputGroup className="mb-3">
        <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">
                <i class="material-icons md-18">search</i>
            </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
            placeholder={props.placeholder}
            aria-label="search"
            aria-describedby="basic-addon1"/>
    </InputGroup>
</div>

export default SecondarySearchBar;