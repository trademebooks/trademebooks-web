import React, {Component} from 'react';
import {connect} from 'react-redux';

import './Auth.scss';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            email: ""
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
                               name="username"
                               type="text"
                               placeholder="Username/ Email"
                               value={this.state.username}/>

                        <input onChange={this.onChange}
                               name="password"
                               type="password"
                               placeholder="Password"
                               value={this.state.password}/>


                        <input className="auth-submit" type="submit" value="Signup"/>
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

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(Login);
