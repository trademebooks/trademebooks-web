import React from 'react';
import {Link} from "react-router-dom";

const Landing = () => {
    return (
        <div>
            <div className="view landing-page">
                <div className="mask rgba-black-light d-flex justify-content-center align-items-center">
                    <div className="text-center white-text mx-5 wow fadeIn">
                        <h1 className="mb-4">
                            <strong>Trade Me Books</strong>
                        </h1>

                        <p><strong>The #1 place to buy and sell used textbooks in Ontario.</strong></p>

                        <p className="mb-4 d-none d-md-block">
                            <strong>
                                Having trouble finding the course textbook? Tired of buying new textbooks for a premium price? Use Trade Me Books to buy and sell textbooks for
                                all your classes!
                            </strong>
                        </p>

                        <span><Link to="/buy-books" className="btn btn-primary btn-lg">Buy Books</Link></span>
                        <span><Link to="/sell-books" className="btn btn-outline-white btn-lg">Sell Books</Link></span>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
