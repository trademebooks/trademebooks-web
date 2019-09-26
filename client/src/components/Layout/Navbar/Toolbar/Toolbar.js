import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';
import Logo from "../../../../images/Icons/logo.png";
import Col from "react-bootstrap/Col";

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>

            <div className="toolbar__logo">
                <a href="/">
                    <img src={Logo} width="40px" height="50px" />
                </a>
            </div>

            <div className="spacer" />

            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="/profile">Profile</a></li>
                    <li><a href="/account">Account</a></li>
                    <li><a href="/register" className="btn">Register</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/logout">Logout</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;