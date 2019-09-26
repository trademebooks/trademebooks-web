import React, {Component} from "react";
import NavigationSubBar from "../Pages/NavigationSubBar";
import SecondarySearchBar from "../Pages/SecondarySearchBar";

import "./Bookstore.scss";
import MyBookstoreResultCard from "../Pages/MyBookstoreResultCard";
import loc_icon from "../../images/Icons/Location_icon.png"
import school_icon from "../../images/Icons/School_icon.png"

class Bookstore extends Component {
    // TODO currently useless, but we'll use it when we can check login status
    constructor(props) {
        super(props);

        this.state = {
            showInternal: false,
            storeOwner: "YiChen",
            location: "North York, Toronto",
            storeloc: "University of Toronto Scarborough",
            currentFilterView: "all",
        }
    }

    // accepts 0 for "all", 1 for "single" or 2 for "bundles". Defaults to "all"
    ChangeFilterView(filterIndex) {
        let filterOpts = ["all", "single", "bundles"];
        let filterby = (filterIndex in filterOpts ? filterOpts[filterIndex] : "all");

        this.setState({
            currentFilterView: filterby,
        });
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

                    <div id="main-bookstore">
                    <span id="owner-labels">
                        Welcome to &nbsp;
                        <b id="store-owner">{this.state.storeOwner}'s</b>
                        &nbsp; Bookstore
                    </span>

                        <div id="locations-bar">
                            <img height="50px" alt="location" className="dec-icon" src={loc_icon}/>
                            <div className="place-labels">
                                Located in:
                                <span className="major-label">{this.state.location}</span>
                            </div>

                            <img height="50px" alt="location" className="dec-icon" src={school_icon}/>
                            <div className="place-labels">
                                Selling books for:
                                <span className="major-label">{this.state.storeloc}</span>
                            </div>
                        </div>

                        <SecondarySearchBar placeholder={`Search ${this.state.storeOwner}'s bookstore`}/>

                        <div id="search-options-bar">
                            <div id="sortLabels">
                                <div className="sortLabel-ind">
                                    <span>Date&nbsp;</span>
                                    <i className="material-icons md-18">arrow_upward</i>
                                </div>

                                <div className="sortLabel-ind">
                                    <span>Price&nbsp;</span>
                                    <i className="material-icons md-18">arrow_upward</i>
                                </div>

                                <div className="sortLabel-ind">
                                    <span>Condition&nbsp;</span>
                                    <i className="material-icons md-18">arrow_drop_down</i>
                                </div>

                                <div id="course-code-search">
                                    <SecondarySearchBar placeholder={"Course Code"}/>
                                </div>
                            </div>

                            <div id="filterLabels">
                            <span className={this.state.currentFilterView === 'all' ? "filter-cur" : "filter-not"}
                                  onClick={() => this.ChangeFilterView(0)}>
                                All</span>
                                <span
                                    className={this.state.currentFilterView === 'single' ? "filter-cur" : "filter-not"}
                                    onClick={() => this.ChangeFilterView(1)}>
                                Single Books</span>
                                <span
                                    className={this.state.currentFilterView === 'bundles' ? "filter-cur" : "filter-not"}
                                    onClick={() => this.ChangeFilterView(2)}>
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