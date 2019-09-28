import React, {Component} from "react"

import "./NavigationSubBar.css";

class NavigationSubBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            highlighted: props.current,
            name: props.name,
        };
    }

    render() {

        // conditional render based on current state
        let navfragment = <div id="NavWrap">
            <div class={this.state.highlighted === 'bookstore' ? "navtxt-cur" : "navtxt-not"}>
                My Bookstore</div>
            <div class={this.state.highlighted === 'messages' ? "navtxt-cur" : "navtxt-not"}>
                My Messages</div>
            <div class={this.state.highlighted === 'settings' ? "navtxt-cur" : "navtxt-not"}>
                My Account Settings</div>
        </div>;

        return (
            <div id="NavSubBar">
                {navfragment}
                <div id="user-hello">
                    Hello, {this.state.name}!
                </div>
            </div>
        );
    }
}

export default NavigationSubBar;