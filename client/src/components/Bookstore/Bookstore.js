import React, {Component} from "react";
import NavigationSubBar from "../Pages/NavigationSubBar";
import SecondarySearchBar from "../Pages/SecondarySearchBar";

import "./Bookstore.css";
import MyBookstoreResultCard from "../Pages/MyBookstoreResultCard";

class Bookstore extends Component {
    // TODO currently useless, but we'll use it when we can check login status
    constructor(props) {
        super(props)

        this.state = {
            showInternal: false,
            storeOwner: "YiChen",
            location: "North York, Toronto",
            storeloc: "University of Toronto Scarborough"
        }
    }

    render() {

        // renders differently based on whether the owner is viewing
        let storefragment;

        if (this.state.showInternal) {
            storefragment = 
            <div id="bookstore-int">
                <NavigationSubBar
                current="bookstore"
                name="Cedric"
                />
                
                <div id="main-bookstore">
                    <SecondarySearchBar placeholder="Search my books"/>

                    
                    <div id="results-wrapper">
                        <MyBookstoreResultCard/>
                        <MyBookstoreResultCard/>
                    </div>
                </div>
            </div>
        } else {
            storefragment = 
            <div id="bookstore-ext">
                
                <h1>Welcome to {this.state.storeOwner}'s Bookstore</h1>

                <div id="locations-bar">
                    <div className="place-labels">
                        Located in:
                        <div>{this.state.location}</div>
                    </div>
                    <div className="place-labels">
                        Selling books for:
                        <div>{this.state.storeloc}</div>
                    </div>
                </div>

                <div id="main-bookstore">
                    <SecondarySearchBar placeholder={`Search ${this.state.storeOwner}'s bookstore`}/>

                    
                    <div id="results-wrapper">
                        <MyBookstoreResultCard/>
                        <MyBookstoreResultCard/>
                        <MyBookstoreResultCard/>
                        <MyBookstoreResultCard/>
                    </div>
                </div>
            </div>
        }


        return (
            // interior view, seen by owner
            storefragment
        );
    }
}

export default Bookstore;