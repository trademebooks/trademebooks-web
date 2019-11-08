import React, {Component} from "react";
import './SingleResultCard.scss';

// Images
import very_good_condition_green_image from "../../images/Icons/Verygood_condition.png";
import sample_book_image from "../../images/assets/sample-book.png";
import Message_icon from "../../images/Icons/Message_icon.png";
import Books_icon from "../../images/Icons/Books_icon.png";
import Location_icon from "../../images/Icons/Location_icon.png";

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
                                <img className="single-card-image" src={sample_book_image} alt="single card book"/>
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
                                <span className="single-card__book-edition-number">{this.props.book.edition}</span>
                            </div>

                            <div className="single-card-column-section-2__row-2">
                                <div>
                                    <span className="single-card__book-condition"><img height="25px" src={very_good_condition_green_image} alt="condition=good"/></span>
                                </div>

                                <div className="single-card__tags">
                                    <span><a href="#tag">MCMASTER UNIVERSITY</a></span>
                                    <span><a href="#tag">CIV358</a></span>
                                    <span><a href="#tag">CIV5481</a></span>
                                </div>
                            </div>

                            <div className="single-card-column-section-2__row-3">
                                <span className="author-by">By</span>
                                <span className="text-authors">{this.props.book.authors}</span>
                            </div>

                            <div className="single-card-column-section-2__row-4">
                                <p>
                                    {this.props.book.description}
                                </p>
                            </div>


                            {/*Card footer*/}
                            <div className="single-card-column-section-2__row-5">
                                <img src={Location_icon} width="20px" alt="contact info card"/>
                                <span>&nbsp;</span>
                                <span className="location">{this.props.book.school}</span>
                            </div>
                        </div>
                        {/* Column 2 - end   */}

                        <div className="flex-grow-1">&nbsp;</div>

                        {/* Column 3 - start */}
                        <div className="single-card-column-section-3">
                            <div className="money">
                                <span className="">$</span>
                                <span className="">{this.props.book.price}</span>
                            </div>
                            <div>
                                <img alt="test" height="50px" src={Message_icon}/>
                            </div>
                            <div>
                                <img src={Books_icon} height="50px" alt="test"/>
                            </div>
                            <div>
                                {this.props.book.datePublished}
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