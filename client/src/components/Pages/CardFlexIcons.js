import React, {Component} from "react";
import '../../css/CardFlexIcons.css';
import edit_icon from "../../images/Icons/Edit_icon.png"
import delete_icon from "../../images/Icons/Trash_icon.png"

class CardFlexIcons extends Component {
    // Just pass in the wanted icons as true props. This'll handle the rest

    render() {

        // display only icons set to true TODO styles
        let iconfragment = <div className="icons">
            { this.props.edit &&
                <img height="50px" alt="edit this" className="clickable-icon" src={edit_icon}></img>
            }
            { this.props.delete &&
                <img height="50px" alt="delete this" className="clickable-icon" src={delete_icon}></img>
            }
        </div>;

        return (
            <div className="card-icons">
                <div className="money">
                    <span className="dollar">$</span>
                    <span className="amount">75</span>
                </div>
                {iconfragment}
            </div>
        );
    }
}

CardFlexIcons.defaultProps = {
    edit: false,
    delete: false,
}

export default CardFlexIcons