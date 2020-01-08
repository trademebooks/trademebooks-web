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

                        <p><strong>Best & free guide of responsive web design</strong></p>

                        <p className="mb-4 d-none d-md-block">
                            <strong>
                                The most comprehensive tutorial for the Bootstrap 4. Loved by over 500 000 users.
                                Video and written versions available.
                                Create your own, stunning website.
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
