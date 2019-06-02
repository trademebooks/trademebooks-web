import React, {Component} from 'react';
import {connect} from 'react-redux';

class Register extends Component {
    render() {
        return (
            <div>
                <h1>Registration page</h1>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(Register);
