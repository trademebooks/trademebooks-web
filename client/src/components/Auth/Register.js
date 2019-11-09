import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import toastr from 'toastr/build/toastr.min';

import {createNewUser} from "../../redux/actions/securityActions";

import './Auth.scss';

import axios from 'axios';
import * as Constants from '../../utilities/Constants';
import auth from "../../utilities/AuthUtil";

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "yichenzhu",
            email: "yichen123@yichen.com",
            password: "password"
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        if (auth.isAuthenticated()) {
            this.props.history.push("/dashboard");
        }
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(event) {
        event.preventDefault();

        let errors = 0;

        for (let field in this.state) {
            if (this.state[field].length === 0) {
                let x = field.replace(/_|-/g, " ");
                x = x.toLowerCase().replace(/\b[a-z]/g, function (letter) {
                    return letter.toUpperCase();
                });
                toastr.error(x + " is required.");
                errors++;
            }
        }

        if (errors <= 0) {
            axios.post(Constants.REGISTER_URL, this.state)
                .then(function (response) {
                    console.log(response);
                    toastr.success("You have successfully registered for an account. We are redirecting you to the login page.");
                    //this.props.history.push("/login");

                    setTimeout(function () {
                        window.location.href = "/login";
                    }, 2000);
                })
                .catch(function (error) {
                    console.log(error);
                    toastr.error(error);
                });
        }
    }

    render() {
        return (
            <div id="auth-page">
                <div id="auth-header">
                    <h1>Get Started</h1>
                    <p>Creating an account lets you sell books, contact sellers and view other people’s bookstores</p>
                </div>

                <div id="auth-interactable">
                    <form id="auth-form" onSubmit={this.onSubmit}>
                        <input onChange={this.onChange}
                               name="username"
                               type="text"
                               placeholder="Full Name"
                               value={this.state.username}/>

                        <input onChange={this.onChange}
                               name="email"
                               type="email"
                               placeholder="Email"
                               value={this.state.email}/>

                        <input onChange={this.onChange}
                               name="password"
                               type="password"
                               placeholder="Password"
                               value={this.state.password}/>

                        <p className="auth-tc">By registering, I agree to TMB’s <Link to="/terms">Terms and Conditions</Link>.</p>

                        <input className="auth-submit" type="submit" value="Register"/>
                    </form>
{/*
                    <div id="auth-other">
                        <button className="auth-other facebook">SIGN UP WITH FACEBOOK</button>
                        <button className="auth-other google">SIGN UP WITH GOOGLE</button>
                        <button className="auth-other twitter">SIGN UP WITH TWITTER</button>
                        <button className="auth-other linkedin">SIGN UP WITH LINKEDIN</button>
                    </div>*/}
                </div>

                <p className="auth-options">Already have an account? <a href="/login">Login</a>.</p>
            </div>
        );
    }
}

Register.propTypes = {
    createNewUser: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
    {createNewUser}
)(Register);
