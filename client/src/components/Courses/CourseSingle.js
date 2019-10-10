import React, {Component} from 'react';

class CourseSingle extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            myUserName: this.props.username
        }
    }

    render() {
        return (
            <div>
                <h1>This is a single course from the CourseSingle.js file</h1>
                <div>This is the prop {this.state.myUserName}</div>
            </div>
        );
    }
}

export default CourseSingle;