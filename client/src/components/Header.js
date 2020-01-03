import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBContainer, MDBIcon
} from "mdbreact";

class Header extends Component {
    state = {
        collapseID: ""
    };

    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));

    // <MDBContainer></MDBContainer> 
    render() {
        return (
            <div>
                <MDBNavbar color="info-color" dark expand="md" style={{ marginTop: "0px" }}>
                    <MDBContainer>
                        <MDBNavbarBrand>
                            <strong className="white-text">MDBNavbar</strong>
                        </MDBNavbarBrand>
                        <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
                        <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
                            <MDBNavbarNav right>
                                <MDBNavItem>
                                    <MDBNavLink className="waves-effect waves-light" to="#!">
                                        <MDBIcon icon="envelope" className="mr-1" />Contact</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink className="waves-effect waves-light" to="#!">
                                        <MDBIcon icon="cog" className="mr-1" />Settings
                                    </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBDropdown>
                                        <MDBDropdownToggle nav caret>
                                            <MDBIcon icon="user" className="mr-1" />
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu className="dropdown-default" right>
                                            <MDBDropdownItem href="#!"><MDBIcon icon="cog" className="mr-1" />Settings</MDBDropdownItem>
                                            <MDBDropdownItem href="#!">Log out</MDBDropdownItem>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                </MDBNavItem>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBContainer>
                </MDBNavbar>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        //courses: state.courses
    };
}

function mapDispatchToProps(dispatch) {
    return {
        //auth //actions: bindActionCreators(courseActions, dispatch)
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
