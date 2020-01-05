import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Messages extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="text-center mt-4">
                <h1>My Messages </h1>
            </div>
        )
    }
}

export default Messages;
