import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {createNewUser} from "../../redux/actions/securityActions";

import './Auth.scss';

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
                errors++;
            }
        }

        if (errors > 0) {
            console.log("we got errors bro");
        }
        else {
            let email = this.state.email;
            let password = this.state.password;
            this.props.createNewUser({ email, password}, this.props.history);
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
                               placeholder="Username"
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

                        <p className="auth-tc">By signing up, I agree to TMB’s <a href="/terms">Terms and Conditions</a>
                        </p>

                        <input className="auth-submit" type="submit" value="Signup"/>
                    </form>

                    <div id="auth-other">
                        <button className="auth-other facebook">SIGN UP WITH FACEBOOK</button>
                        <button className="auth-other google">SIGN UP WITH GOOGLE</button>
                        <button className="auth-other twitter">SIGN UP WITH TWITTER</button>
                        <button className="auth-other linkedin">SIGN UP WITH LINKEDIN</button>

                    </div>
                </div>

                <p className="auth-options">Already have an account? <a href="/login">Login</a></p>
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
    { createNewUser }
)(Register);
