import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './CardFooter.scss';
import Location_icon from '../../images/Icons/Location_icon.png';

const CardFooter = () => <div className="card-footer">
    <Row className="contact-info">
        <Col xs={10}>
            <img
                src={Location_icon}
                height="20px"
                style={{
                    marginBottom: "2%",
                    marginRight: "2%"
                }}
                alt="contact info card"
            />
            <span className="location">North York, Toronto</span>
        </Col>
    </Row>
</div>;

export default CardFooter;