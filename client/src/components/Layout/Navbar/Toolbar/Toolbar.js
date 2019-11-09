import React, {Component} from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';
import Logo from "../../../../images/Icons/logo.png";
import {logout} from "../../../../redux/actions/securityActions";
import auth from '../../../../utilities/AuthUtil';
import toastr from 'toastr/build/toastr.min';
import axios from 'axios';
import * as Constants from "../../../../utilities/Constants";

class Toolbar extends Component {

    constructor(props, context) {
        super(props, context);

        this.logout.bind(this);
    }

    logout() {
        auth.logout(function () {
            console.log("logging the user out");
            setTimeout(function () {
                toastr.success("Thanks for using TMB, come back again soon!");
                window.location.href = "/";
            }, 300);
        })
    }

    render() {
        let validToken = "";
        let user = {};
        // const {validToken, user} = this.props.security;

        const userIsAuthenticated = (
            <ul>
                {/*<li><Link to="/courses">Courses</Link></li>*/}
                {/*<li><Link to="/profile">Profile</Link></li>*/}
                <li><Link to="/bookstore">My Bookstore</Link></li>
                <li className="navbar__inverted-button"><Link to="/sell-book">Sell Books</Link></li>
                <li><Link to="/account">Account</Link></li>
                <li><Link to="#logout" onClick={this.logout}>Logout</Link></li>
            </ul>
        );

        const userIsNotAuthenticated = (
            <ul>
                <li><Link to="/login">Login</Link></li>
                <li className="navbar__inverted-button"><Link to="/register">Register</Link></li>
            </ul>
        );

        let headerLinks;

        const isLoggedIn = auth.isAuthenticated();
        /*
        if (validToken && user) {
            headerLinks = userIsAuthenticated;
        }*/
        if (isLoggedIn) {
            headerLinks = userIsAuthenticated;
        }
        else {
            headerLinks = userIsNotAuthenticated;
        }

        return (
            <header className="toolbar">
                <nav className="toolbar__navigation">


                    <div className="toolbar__logo">
                        <a href="/">
                            <img alt="Book Logo" src={Logo} width="40px" height="50px"/>
                        </a>
                    </div>

                    <div className="spacer"/>

                    <div className="toolbar_navigation-items">
                        {headerLinks}
                    </div>

                    <div className="toolbar__toggle-button">
                        <DrawerToggleButton click={this.props.drawerClickHandler}/>
                    </div>
                </nav>
            </header>
        )
    }
}

Toolbar.propTypes = {
    logout: PropTypes.func.isRequired,
    //security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    security: state.security
});

export default connect(
    mapStateToProps,
    {logout}
)(Toolbar);