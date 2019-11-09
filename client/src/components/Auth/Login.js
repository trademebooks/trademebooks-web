import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";

import {login} from "../../redux/actions/securityActions";

import './Auth.scss';
import toastr from 'toastr/build/toastr.min';
import axios from 'axios';
import * as Constants from '../../utilities/Constants';
import auth from "../../utilities/AuthUtil";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        if (auth.isAuthenticated()) {
            this.props.history.push("/");
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
            axios.post(Constants.LOGIN_URL, this.state)
                .then(function (response) {
                    console.log(response);
                    toastr.success("You have successfully logged in. We are redirecting you to the homage page.");

                    auth.login(function () {
                        setTimeout(function () {
                            window.location.href = "/";
                        }, 2000)
                    });

                })
                .catch(function (error) {
                    let data = error.response.data;
                    let errors = data.errors;
                    console.log(errors);
                    errors.forEach( error => {
                        toastr.error(error);
                    });
                });
        }
    }


    render() {
        return (
            <div id="auth-page">
                <div id="auth-header">
                    <h1>LOGIN</h1>
                    <p>Welcome Back!</p>
                </div>

                <div id="auth-interactable">
                    <form id="auth-form" onSubmit={this.onSubmit}>
                        <input onChange={this.onChange}
                               name="email"
                               type="text"
                               placeholder="Username/ Email"
                               value={this.state.username}/>

                        <input onChange={this.onChange}
                               name="password"
                               type="password"
                               placeholder="Password"
                               value={this.state.password}/>


                        <input className="auth-submit" type="submit" value="Login"/>
                    </form>

                    <div id="auth-other">
                        <button className="auth-other facebook">LOG IN WITH FACEBOOK</button>
                        <button className="auth-other google">LOG IN WITH GOOGLE</button>
                        <button className="auth-other twitter">LOG IN WITH TWITTER</button>
                        <button className="auth-other linkedin">LOG IN WITH LINKEDIN</button>
                    </div>
                </div>

                <p className="auth-options">Don't have an account? <a href="/register">Register</a></p>
            </div>
        );
    }
}

Login.propTypes = {
    login: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
    {login}
)(Login);