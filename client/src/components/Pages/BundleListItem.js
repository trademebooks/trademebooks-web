import React from "react";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import '../../css/CardFooter.css';
const BundleListItem = (props) => <Row className="bundle-item">
    <Col xs="auto">
        <img height="15px" width="50px" src={props.condition}></img>
    </Col>
    <Col>
        <span className="list-title">CALCULUS: EARLY TRANSCENDENTALS</span>
        <span className="edition">
            &nbsp; &nbsp; Edition</span>
        <span className="title">
            &nbsp; &nbsp; 7</span>
    </Col>
</Row>

export default BundleListItem