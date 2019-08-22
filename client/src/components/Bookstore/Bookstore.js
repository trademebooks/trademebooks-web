import React, {Component} from "react";
import NavigationSubBar from "../Pages/NavigationSubBar";
import SecondarySearchBar from "../Pages/SecondarySearchBar";

import "./Bookstore.css";
import SingleResultCard from "../Pages/SingleResultCard";

class Bookstore extends Component {

    render() {

        // renders differently based on whether the owner is viewing
        return (
            // interior view, seen by owner
            // Todo: proper results cards
            <div id="bookstore-int">
                <NavigationSubBar
                current="bookstore"
                name="Cedric"
                />
                
                <div id="main-bookstore">
                    <SecondarySearchBar placeholder="Search my books"/>

                    
                    <div id="results-wrapper">
                        <SingleResultCard/>
                        <SingleResultCard/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Bookstore;