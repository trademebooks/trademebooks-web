import React, { Component } from "react";
import './SingleResultCard.scss';

// Images
import very_good_condition_green_image from "./icons/Verygood_condition.png";
import sample_book_image from "./icons/sample-book.png";
import Message_icon from "./icons/Message_icon.png";
import Books_icon from "./icons/Books_icon.png";
import Location_icon from "./icons/Location_icon.png";

const SingleResultCard = (props) => {


    return (
        <div className="single-card mt-3">
            <div className="single-card-container">
                {/* Column 1 - Image --- start */}
                <div className="single-card-column-section-1">
                    <div className="single-card__image-section">
                        <img className="single-card-image" src={sample_book_image} alt="single card book" />
                    </div>
                </div>
                {/* Column 1 - Image --- end   */}

                {/* Column 2 - start */}
                <div className="single-card-column-section-2">
                    <div className="single-card-column-section-2__row-1">
                        <span className="single-card__book-title">{props.book.title}</span>
                        <span>&nbsp;</span>
                        <span className="single-card__book-edition">Edition</span>
                        <span>&nbsp;</span>
                        <span className="single-card__book-edition-number">{props.book.edition}</span>
                    </div>

                    <div className="single-card-column-section-2__row-2">
                        <div>
                            <span className="single-card__book-condition"><img height="25px" src={very_good_condition_green_image} alt="condition=good" /></span>
                        </div>

                        <div className="single-card__tags">
                            <span><a href="#tag">MCMASTER UNIVERSITY</a></span>
                            <span><a href="#tag">CIV358</a></span>
                            <span><a href="#tag">CIV5481</a></span>
                        </div>
                    </div>

                    <div className="single-card-column-section-2__row-3">
                        <span className="author-by">By</span>
                        <span className="text-authors"> {props.book.authors.join(', ')}</span>
                    </div>

                    <div className="single-card-column-section-2__row-4">
                        <p>{props.book.description}</p>
                    </div>

                    {/*Card footer*/}
                    <div className="single-card-column-section-2__row-5">
                        <img src={Location_icon} width="20px" alt="contact info card" />
                        <span>&nbsp;</span>
                        <span className="location"> {props.book.location}</span>
                    </div>
                </div>
                {/* Column 2 - end   */}

                <div className="flex-grow-1">&nbsp;</div>

                {/* Column 3 - start */}
                <div className="single-card-column-section-3">
                    <div className="money">
                        <span className="">$</span>
                        <span className="">{props.book.price}</span>
                    </div>
                    <div>
                        <img alt="test" height="50px" src={Message_icon} />
                    </div>
                    <div>
                        <img src={Books_icon} height="50px" alt="test" />
                    </div>
                    <div>
                        {props.book.datePublished}
                    </div>
                </div>
                {/* Column 3 - end */}
            </div>
        </div>
    );

}

export default SingleResultCard;