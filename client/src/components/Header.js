import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBContainer, MDBIcon
} from "mdbreact";
import logo from "../images/logo.png";

class Header extends Component {

    constructor(props) {
        super(props);


        this.state = {
            collapseID: ""
        };
    }

    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));
    };

    renderContent() {
    }

    render() {
        console.log(this.props.auth);
        // If the user is LOGGED IN
        if (this.props.auth && this.props.auth._id) {
            return (
                <div>
                    <MDBNavbar color="info-color" dark expand="md" style={{marginTop: "0px"}}>
                        <MDBContainer>
                            <MDBNavbarBrand>
                                <Link to="/">
                                    {/*<strong className="white-text">TMB</strong>*/}
                                    <img width="32px" height="44px" src={logo}/>
                                </Link>
                            </MDBNavbarBrand>
                            <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")}/>
                            <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
                                <MDBNavbarNav left>
                                    <MDBNavItem>
                                        <MDBNavLink to="/buy-books"><strong>Buy</strong></MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="/sell-books"><strong>Sell</strong></MDBNavLink>
                                    </MDBNavItem>
                                </MDBNavbarNav>

                                <MDBNavbarNav right>
                                    <MDBNavItem>
                                        <MDBNavLink disabled={true} link={false} to="/">Hello, {this.props.auth.name}!</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink className="waves-effect waves-light" to="/messages">
                                            <MDBIcon icon="envelope" className="mr-1"/>
                                        </MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBDropdown>
                                            <MDBDropdownToggle nav caret>
                                                <MDBIcon icon="user" className="mr-1"/>
                                            </MDBDropdownToggle>
                                            <MDBDropdownMenu className="dropdown-default" right>
                                                <MDBDropdownItem href="/bookstore">
                                                    <MDBIcon icon="store" className="mr-1"/> My Bookstore
                                                </MDBDropdownItem>
                                                <MDBDropdownItem href="/settings">
                                                    <MDBIcon icon="cog" className="mr-2"/> Settings
                                                </MDBDropdownItem>
                                                <MDBDropdownItem href="/api/logout">
                                                    <MDBIcon icon="sign-out-alt" className="mr-2"/> Logout
                                                </MDBDropdownItem>
                                            </MDBDropdownMenu>
                                        </MDBDropdown>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                            </MDBCollapse>
                        </MDBContainer>
                    </MDBNavbar>
                </div>
            )
        } else {
            return (
                <div>
                    <MDBNavbar color="info-color" dark expand="md" style={{marginTop: "0px"}}>
                        <MDBContainer>
                            <MDBNavbarBrand>
                                <Link to="/"><strong className="white-text">TMB</strong></Link>
                            </MDBNavbarBrand>
                            <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")}/>
                            <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
                                <MDBNavbarNav left>
                                    <MDBNavItem>
                                        <MDBNavLink to="/buy-books"><strong>Buy</strong></MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="/sell-books"><strong>Sell</strong></MDBNavLink>
                                    </MDBNavItem>
                                </MDBNavbarNav>

                                <MDBNavbarNav right>
                                    <MDBNavItem>
                                        <MDBNavLink to="/register"><strong>Register</strong></MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="/login"><strong>Login</strong></MDBNavLink>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                            </MDBCollapse>
                        </MDBContainer>
                    </MDBNavbar>
                </div>
            );
        }
    }
}

function mapStateToProps({auth}) {
    return {auth};
}

function mapDispatchToProps(dispatch) {
    return {
        //actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(
    mapStateToProps,/*
    mapDispatchToProps*/
)(Header);
