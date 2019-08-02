import React from "react";
import Row from "react-bootstrap/Row"
import '../../css/CardFooter.css';
const CardFooter = () => <div className="card-footer">
    <Row className="contact-info">
        <i class="material-icons md-18">location_on</i>
        <span className="location">North York, Toronto</span>
        <span className="date">July 15, 19</span>
    </Row>
</div>

export default CardFooter;