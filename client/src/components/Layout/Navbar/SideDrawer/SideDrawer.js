import React, {Component} from 'react';

import './SideDrawer.css';
import {Link} from "react-router-dom";
import auth from "../../../../utilities/AuthUtil";
import {logout} from "../../../../redux/actions/securityActions";
import toastr from 'toastr/build/toastr.min';

class sideDrawer extends Component {

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
        let drawerClasses = 'side-drawer';
        if (this.props.show) {
            drawerClasses = 'side-drawer open';
        }

        const userIsAuthenticated = (
            <ul>
                <li><Link to="/bookstore">My Bookstore</Link></li>
                <li><Link to="/sell-book">Sell Books</Link></li>
                <li><Link to="/account">Account</Link></li>
                <li><Link to="#logout" onClick={this.logout}>Logout</Link></li>
            </ul>
        );

        const userIsNotAuthenticated = (
            <ul>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
        );

        let headerLinks;

        const isLoggedIn = auth.isAuthenticated();

        if (isLoggedIn) {
            headerLinks = userIsAuthenticated;
        } else {
            headerLinks = userIsNotAuthenticated;
        }

        return (
            <nav className={drawerClasses}>
                {headerLinks}
            </nav>
        );
    }
}

export default sideDrawer;