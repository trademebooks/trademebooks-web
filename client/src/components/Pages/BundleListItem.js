import React from "react";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import '../../css/CardFooter.css';
const BundleListItem = () => <Row className="bundle-item">
    <Col xs="auto">
        <img src="http://via.placeholder.com/75x25"></img>
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