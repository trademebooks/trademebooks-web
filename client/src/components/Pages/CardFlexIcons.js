import React, {Component} from "react";
import '../../css/CardFlexIcons.css';
import edit_icon from "../../images/Icons/Edit_icon.png"
import delete_icon from "../../images/Icons/Trash_icon.png"

class CardFlexIcons extends Component {
    // try to figure out what icons to display from the props
    constructor(props) {
        super(props);

        this.state = {
            edit: props.edit,
            delete: props.delete,
        };
    }

    render() {

        // display only icons set to true TODO styles
        let iconfragment = <div className="icons">
            { this.state.edit &&
                <img height="50px" alt="edit this" src={edit_icon}></img>
            }
            { this.state.delete &&
                <img height="50px" alt="delete this" src={delete_icon}></img>
            }
        </div>;

        return (
            <div className="card-icons">
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