import React, {Component} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "../../../images/Icons/logo.png"
import Books_icon_white from "../../../images/Icons/Books_icon_white.png"
import Message_navbar from "../../../images/Icons/Message_navbar.png"
import Account_icon_white from "../../../images/Icons/Account_icon_white.png"
import Button from "react-bootstrap/Button";

//import {NavLink} from "react-router-dom";
import "./navbar.css";
const SignedOutNav = () => <Row
    style={{
    padding: "0.8%",
    background: "#109383",
    color: "white"
}}>
    <Col xs={{
        offset: 1,
        span: 1
    }}>
        <a href="/">
            <img
                style={{
                marginRight: "2%"
            }}
                src={Logo}
                width="30px"
                height="40px"></img>
        </a>
    </Col>
    <Col
        xs={{
        offset: 7,
        span: 1
    }}
        style={{
        paddingTop: "0.3%"
    }}>
        <a href="/login">
            Login</a>
    </Col>
    <Col xs={2}>
        <Button
            style={{
            backgroundColor: "white",
            color: "#109383",
            fontWeight: "bold",
            paddingLeft: "8%",
            paddingRight: "8%"
        }}
            variant="primary">Sell Book</Button>
    </Col>
</Row>

const Navbar = () => <Row
    style={{
    paddingTop: "0.8%",
    paddingBottom: "0.8%",
    paddingLeft: "4%",
    paddingRight: "4%",
    background: "#109383",
    color: "white"
}}>
    <Col xs={{
        span: 1
    }}>
        <a href="/">
            <img
                style={{
                marginRight: "2%"
            }}
                src={Logo}
                width="30px"
                height="40px"></img>
        </a>
    </Col>
    <Col
        className="navbar-icons"
        xs={{
        offset: 7,
        span: "auto"
    }}
        style={{
        paddingTop: "0.3%"
    }}>
        <a href="/bookstore">
            <img width="25px" height="30px" src={Books_icon_white} alt="Bookstore"></img>
        </a>
    </Col>
    <Col
        className="navbar-icons"
        xs={"auto"}
        style={{
        paddingTop: "0.3%"
    }}>
        <img width="25px" height="30px" src={Message_navbar} alt="Message Centre"></img>
    </Col>
    <Col
        className="navbar-icons"
        xs={"auto"}
        style={{
        paddingTop: "0.3%"
    }}>
        <a href="/settings">
            <img width="25px" height="30px" src={Account_icon_white} alt="Account Settings"></img>
        </a>
    </Col>
    <Col xs={2} className="navbar-icons">
        <Button
            style={{
            backgroundColor: "white",
            color: "#109383",
            fontWeight: "bold",
            paddingLeft: "8%",
            paddingRight: "8%"
        }}
            variant="primary">Sell Book</Button>
    </Col>
</Row>

/* class Navbar extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {};

        this.openNav = this
            .openNav
            .bind(this);
        this.closeNav = this
            .closeNav
            .bind(this);
    }

    openNav(event) {
        document
            .getElementById("mobile__menu")
            .style
            .width = "100%";
    }

    closeNav(event) {
        document
            .getElementById("mobile__menu")
            .style
            .width = "0";
    }

    render() {
        let logoStyles = {
            color: 'white',
            fontFamily: "'Cedarville Cursive', cursive"
        };

        return (
            <div>
                {// Desktop Menu}
                <header>
                    <div style={logoStyles}>
                        <a href="/">
                            <i>trademebooks</i>
                        </a>
                    </div>
                    <nav>
                        <ul className="nav__links">
                            <li>
                                <a href="#">Services</a>
                            </li>
                            <li>
                                <a href="#">Projects</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                        </ul>
                    </nav>
                    <a className="cta" href="#">
                        <button>Contact</button>
                    </a>
                    <a onClick={this.openNav} className="menu" href="#">
                        <button>Menu</button>
                    </a>
                </header>

                {// Mobile Menu}
                <div id="mobile__menu" className="overlay">
                    <a className="close" onClick={this.closeNav}>&times;</a>
                    <div className="overlay__content">
                        <a href="#">About</a>
                        <a href="#">Contact</a>
                        <a href="#">404</a>
                    </div>
                </div>
            </div>
        )
    }
} */

export default Navbar;
