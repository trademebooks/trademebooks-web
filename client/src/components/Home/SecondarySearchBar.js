
import React from "react";
import './SecondarySearchBar.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const SecondarySearchBar = (props) => (
    <div className="ml-2">
        <form className="form-inline md-form form-sm mt-0">
            <i className="fas fa-search active" aria-hidden="true"/>

            {/*<FontAwesomeIcon icon="coffee" />*/}

            <i className="material-icons md-18">search</i>

            <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder={props.placeholder}
                   aria-label="Search"/>
        </form>
    </div>
);

export default SecondarySearchBar;