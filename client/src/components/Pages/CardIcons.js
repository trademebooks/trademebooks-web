import React from "react";
import '../../css/CardFooter.css';
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
            <img src="http://via.placeholder.com/50x50"></img>
        </p>

        <img src="http://via.placeholder.com/50x50"></img>
    </div>
</div>
export default CardIcons