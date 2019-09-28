import React, {Component} from "react";
import './SingleResultCard.scss';

import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import CardHeader from "./CardHeader.js"
import CardFooter from "./CardFooter.js"
import CardIcons from "./CardIcons"

import axios from "axios";
import * as Constants from "../../utilities/Constants";

class SingleResultCard extends Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="card-container">
                <Card>
                    <Row>
                        <Col xs={3}>
                            <Card.Img
                                className="card-image"
                                fluid
                                variant="top"
                                src="http://via.placeholder.com/200x260"/>
                        </Col>
                        <Col xs={9}>
                            <Row>
                                <Col xs={10}>
                                    <Card.Body>
                                        <CardHeader single={true}/>
                                        <Row className="text-meta text">
                                            <span>MCMASTER UNIVERSITY</span>
                                            <span>CIV358</span>
                                            <span>CIV5481</span>
                                        </Row>
                                        <Row className="text">
                                            <span className="author-by">By</span>
                                            <span className="text-author">Richard Fymann, Qing Yu</span>
                                        </Row>
                                        <Row className="text">
                                            <p>
                                                The Tools. This was easily the best book I read in 2012. It's *packed*
                                                with
                                                goodness. Stutz and Michels are two no-nonsense therapists who developed
                                                powerful tools to transform our problems into courage, confidence, and
                                                creativity
                                            </p>
                                        </Row>

                                    </Card.Body>
                                </Col>
                                <Col xs={2}>
                                    <CardIcons/>
                                </Col>
                            </Row>
                            <CardFooter/>
                        </Col>
                    </Row>
                </Card>
            </div>);
    }
}

export default SingleResultCard;