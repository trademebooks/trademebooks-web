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
            storeloc: "University of Toronto Scarborough",
            currentFilterView: "all",
        }
    }

    render() {

        // renders differently based on whether the owner is viewing
        // checks showInternal's state to see if it should so the ext or int
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
                        <MyBookstoreResultCard edit={true} delete={true}/>
                        <MyBookstoreResultCard edit={true} delete={true}/>
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

                    <div id="search-options-bar">
                        <div className="sortLabels">
                            <div className="sortLabel-ind">
                                <span>Date&nbsp;</span>
                                <i class="material-icons md-18">arrow_upward</i>
                            </div>

                            <div className="sortLabel-ind">
                                <span>Price&nbsp;</span>
                                <i class="material-icons md-18">arrow_upward</i>
                            </div>

                            <div className="sortLabel-ind">
                                <span>Condition&nbsp;</span>
                                <i class="material-icons md-18">arrow_drop_down</i>
                            </div>

                            <div id="course-code-search">
                                <SecondarySearchBar placeholder={"Course Code"}/>
                            </div>
                        </div>

                        <div className="filterLabels">
                            <span class={this.state.currentFilterView === 'all' ? "filter-cur" : "filter-not"}>
                                All</span>
                            <span class={this.state.currentFilterView === 'single' ? "filter-cur" : "filter-not"}>
                                Single Books</span>
                            <span class={this.state.currentFilterView === 'bundles' ? "filter-cur" : "filter-not"}>
                                Bundles</span>
                        </div>
                    </div>
                    
                    <div id="results-wrapper">
                        <MyBookstoreResultCard message={true}/>
                        <MyBookstoreResultCard message={true}/>
                        <MyBookstoreResultCard message={true}/>
                        <MyBookstoreResultCard message={true}/>
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