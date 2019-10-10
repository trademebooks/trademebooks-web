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
            <div className="single-card-container mt-5">
                <div className="card">
                    <div className="row">

                        {/* Column 1 - Image --- start */}
                        <div className="col-12 col-sm-12 col-xl-2">
                            <div className="single-card-container__image-section">
                                <img className="single-card-container--card-image" src={sample_book_image} alt="single card book image"/>
                            </div>
                        </div>
                        {/* Column 1 - Image --- end   */}

                        {/* Column 2 - start */}
                        <div className="col-12 col-sm-12 col-xl-9">
                            <div className="">
                                <span className="single-card-container__book-title">Calculus: Early Transcendentals</span>
                                <span>&nbsp;</span>
                                <span className="single-card-container__book-edition">Edition</span>
                                <span>&nbsp;</span>
                                <span className="single-card-container__number">7</span>
                            </div>

                            <div className="">
                                <span><img height="25px" src={very_good_condition_green_image} alt="test"/></span>
                                <span>MCMASTER UNIVERSITY</span>
                                <span>CIV358</span>
                                <span>CIV5481</span>
                            </div>

                            <div className="">
                                <span className="author-by">By</span>
                                <span className="text-author">Richard Fymann, Qing Yu</span>
                            </div>

                            <div className="">
                                <p>
                                    The Tools. This was easily the best book I read in 2012. It's *packed*
                                    with
                                    goodness. Stutz and Michels are two no-nonsense therapists who developed
                                    powerful tools to transform our problems into courage, confidence, and
                                    creativity
                                </p>
                            </div>

                            <CardFooter/>
                        </div>
                        {/* Column 2 - end   */}

                        {/* Column 3 - start */}
                        <div className="col-sm-12 col-xl-1">

                            <div className="money">
                                <span className="dollar">$</span>
                                <span className="amount">200</span>
                            </div>
                            <div>
                                <p><img alt="test" height="50px" src={Message_icon}/></p>
                            </div>
                            <div>
                                <img src={Books_icon} height="50px" alt="test"/>
                            </div>
                        </div>
                    </div>
                    {/* Column 3 - start */}

                </div>
            </div>
        );
    }

}

export default SingleResultCard;