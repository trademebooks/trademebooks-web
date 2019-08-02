import React from "react";
import '../../css/SingleResultCard.css';
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardHeader from "./CardHeader.js"
import CardFooter from "./CardFooter.js"
import CardIcons from "./CardIcons"

const SingleResultCard = () => <div className="card-container">
    <Card>
        <Row>
            <Col xs={3}>
                <Card.Img
                    className="card-image"
                    variant="top"
                    src="http://via.placeholder.com/200x260"/>
            </Col>
            <Col xs={7}>
                <Card.Body>
                    <CardHeader/>
                    <Row className="text-meta">
                        <span>MCMASTER UNIVERSITY</span>
                        <span>CIV358
                        </span>
                        <span>CIV5481</span>
                    </Row>
                    <Row>
                        <Col>
                            <span className="author-by">By</span>
                            <span className="text-author">Richard Fymann, Qing Yu</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6}>
                            <p>
                                The Tools. This was easily the best book I read in 2012. It's *packed* with
                                goodness. Stutz and Michels are two no-nonsense therapists who developed
                                powerful tools to transform our problems into courage, confidence, and
                                creativity
                            </p>
                        </Col>
                    </Row>

                </Card.Body>
            </Col>
            <Col xs={2}>
                <CardIcons></CardIcons>
            </Col>

        </Row>
        <CardFooter/>
    </Card>
</div>

export default SingleResultCard;