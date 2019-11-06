import React, {Component} from "react";
import './SingleResultCard.scss';

import CardFooter from "./CardFooter.js";

// Images
import very_good_condition_green_image from "../../images/Icons/Verygood_condition.png";
import sample_book_image from "../../images/assets/sample-book.png";
import Message_icon from "../../images/Icons/Message_icon.png";
import Books_icon from "../../images/Icons/Books_icon.png";

class SingleResultCard extends Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="single-card mt-5">
                {/*<div className="card">*/}
                    <div className="single-card-container">

                        {/* Column 1 - Image --- start */}
                        <div className="single-card-column-section-1">
                            <div className="single-card__image-section">
                                <img className="single-card-image" src={sample_book_image} alt="single card book image"/>
                            </div>
                        </div>
                        {/* Column 1 - Image --- end   */}

                        {/* Column 2 - start */}
                        <div className="single-card-column-section-2">
                            <div className="single-card-column-section-2__row-1">
                                <span className="single-card__book-title">{this.props.book.title}</span>
                                <span>&nbsp;</span>
                                <span className="single-card__book-edition">Edition</span>
                                <span>&nbsp;</span>
                                <span className="single-card__book-edition-number">7</span>
                            </div>

                            <div className="single-card-column-section-2__row-2">
                                <div>
                                    <span className="single-card__book-condition"><img height="25px" src={very_good_condition_green_image} alt="condition=good"/></span>
                                </div>

                                <div className="single-card__tags">
                                    <span><a href="#">MCMASTER UNIVERSITY</a></span>
                                    <span><a href="#">CIV358</a></span>
                                    <span><a href="#">CIV5481</a></span>
                                </div>
                            </div>

                            <div className="single-card-column-section-2__row-3">
                                <span className="author-by">By</span>
                                <span className="text-authors">Richard Fymann, Qing Yu</span>
                            </div>

                            <div className="single-card-column-section-2__row-4">
                                <p>
                                    The Tools. This was easily the best book I read in 2012. It's *packed* with
                                    goodness. Stutz and Michels are two no-nonsense therapists who developed
                                    powerful tools to transform our problems into courage, confidence, and
                                    creativity
                                </p>
                            </div>

                            <CardFooter/>
                        </div>
                        {/* Column 2 - end   */}

                        {/* Column 3 - start */}
                        <div className="single-card-column-section-3">
                            <div className="money">
                                <span className="">$</span>
                                <span className="">200</span>
                            </div>
                            <div>
                                <img alt="test" height="50px" src={Message_icon}/>
                            </div>
                            <div>
                                <img src={Books_icon} height="50px" alt="test"/>
                            </div>
                            <div>
                                July 15, 2019
                            </div>
                        </div>
                        {/* Column 3 - end */}
                    </div>

                {/*</div>*/}
            </div>
        );
    }

}

export default SingleResultCard;