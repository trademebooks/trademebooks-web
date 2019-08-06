import React from "react";
import '../../css/CardFooter.css';
import Message_icon from "../../images/Icons/Message_icon.png"
import Books_icon from "../../images/Icons/Books_icon.png"
const CardIcons = () => <div
    className="card-icons"
    style={{
    textAlign: "right",
    paddingRight: "1rem",
    paddingTop: "1.5rem"
}}>
    <div className="money">
        <span className="dollar">$</span>
        <span className="amount">200</span>
        <p className="type">Bundle</p>
    </div>
    <div className="icons" style={{
        marginTop: "3rem"
    }}>
        <p>
            <img height="50px" src={Message_icon}></img>
        </p>

        <img
            style={{
            marginRight: "6%",
            marginTop: "3%"
        }}
            src={Books_icon}
            height="50px"></img>
    </div>
</div>
export default CardIcons