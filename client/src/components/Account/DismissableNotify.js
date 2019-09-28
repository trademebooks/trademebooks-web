import React, {Component} from "react";
import './DismissableNotify.css';
import X_icon from "../../images/Icons/X_button.png"

class DismissableNotify extends Component {
    // basic notification component, says whatever is in the text prop
    // clicking the X performs whatever function is in the closeClick prop

    render() {
        return (
            <div className="notify-wrap">
                <span className="notify-text">{this.props.text}</span>
                <img alt="message the owner of this" className="dismiss-icon" src={X_icon}
                onClick={this.props.closeClick}/>
            </div>
        );
    }
}

// default close function is to just... do nothing

DismissableNotify.defaultProps = {
    text: "Generic Notification",
    closeClick: () => {},
};

export default DismissableNotify;
