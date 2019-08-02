import Card from "react-bootstrap/Card"
import React from "react";
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import '../../css/CardHeader.css';
const CardHeader = () => <Row>
    <Col lg={{
        span: 7
    }} className="cardTitle">
        <Card.Title>
            <span className="title">CALCULUS: EARLY TRANSCENDENTALS</span>
            <span className="edition">
                &nbsp; &nbsp; Edition</span>
            <span className="title">
                &nbsp; &nbsp; 7</span>
        </Card.Title>
    </Col>
    <Col lg={{
        span: 1,
        offset: 2
    }}>
        <img src="http://via.placeholder.com/75x25"></img>
    </Col>
    <Col className="amount" lg={2}>
        <h1>$75</h1>
    </Col>
</Row>

export default CardHeader;