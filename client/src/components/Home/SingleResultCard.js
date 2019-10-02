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
import Verygood_condition from "../../images/Icons/Verygood_condition.png";

class SingleResultCard extends Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="card-container mt-5">
                <div className="card">
                    <div className="row">
                        <div className="col-sm-3">
                            <Card.Img
                                className="card-image"
                                fluid
                                variant="top"
                                src="http://via.placeholder.com/200x260"/>
                        </div>
                        <div className="col-sm-9">
                            <div className="row">
                                <div className="col-sm-10">
                                    <Card.Body>
                                        {/*<CardHeader single={true}/>*/}

                                        <Row>
                                            <Col lg={{
                                                span: 7
                                            }} className="cardTitle">
                                                <Card.Title>
                                                    <span className="title">{this.props.title}</span>
                                                    <span className="edition">Edition</span>
                                                    <span className="title">7</span>
                                                </Card.Title>
                                            </Col>
                                            <Col lg={{
                                                span: 1,
                                                offset: 4
                                            }}>
                                                <img height="25px" src ={Verygood_condition} alt="test"/>
                                            </Col>
                                        </Row>;



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
                                </div>

                                <div className="col-sm-2">
                                    <CardIcons/>
                                </div>
                            </div>
                            <CardFooter/>
                        </div>
                    </div>
                </div>
            </div>);
    }
}

export default SingleResultCard;