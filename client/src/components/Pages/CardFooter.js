import React from "react";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import '../../css/CardFooter.css';
const CardFooter = () => <div className="card-footer">
    <Row className="contact-info">
        <Col xs={10}>
            <i class="material-icons md-18">location_on</i>
            <span className="location">North York, Toronto</span>
        </Col>
        <Col xs={2} style={{
            textAlign: "right"
        }}>
            <span className="date">July 15, 19</span>
        </Col>
    </Row>
</div>

export default CardFooter;