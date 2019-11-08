import React from 'react';

import "./Footer.scss";

const footer = (props) => (
    <div className="main-footer">
        <footer className="main-footer__navigation">
            <div className="main-footer-items">
                <span>&copy; trademebooks 2019</span>
{/*                <ul>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/careers">Careers</a></li>
                </ul>*/}
            </div>
        </footer>
    </div>
);

export default footer;