import React, {Component} from "react";
//import {NavLink} from "react-router-dom";
import "../../css/navbar.css"

class Navbar extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {};

        this.openNav = this.openNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
    }

    openNav(event) {
        document.getElementById("mobile__menu").style.width = "100%";
    }

    closeNav(event) {
        document.getElementById("mobile__menu").style.width = "0";
    }

    render() {
        let logoStyles = {
            color: 'white',
            fontFamily: "'Cedarville Cursive', cursive"
        };

        return (
            <div>
                {
                    // Desktop Menu
                }
                <header>
                    <div style={logoStyles}><a href="/"><i>trademebooks</i></a></div>
                    <nav>
                        <ul className="nav__links">
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Projects</a></li>
                            <li><a href="#">About</a></li>
                        </ul>
                    </nav>
                    <a className="cta" href="#">
                        <button>Contact</button>
                    </a>
                    <a onClick={this.openNav} className="menu" href="#">
                        <button>Menu</button>
                    </a>
                </header>

                {
                    // Mobile Menu
                }
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
}

export default Navbar;
