import React, {Component} from "react";
import './MyBookstoreResultCard.css';
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardHeader from "../Home/CardHeader.js";
import CardFooter from "../Home/CardFooter.js";
import CardFlexIcons from "./CardFlexIcons";

class MyBookstoreResultCard extends Component {
    // the props passed into this define the icons that appear
    // unpassed props default to false
    
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
                        <Col xs ={9}>
                            <Row >
                                <Col xs={10}>
                                    <Card.Body>
                                        <CardHeader single={true}/>
                                        <Row className="text-meta text">
                                            <span>MCMASTER UNIVERSITY</span>
                                            <span>CIV358
                                            </span>
                                            <span>CIV5481</span>
                                        </Row>
                                        <Row className="text">
                                            <span className="author-by">By</span>
                                            <span className="text-author">Richard Feynmann, Qing Yu</span>
                                        </Row>
                                        <Row className="text">
                                            <p>
                                                The Tools. This was easily the best book I read in 2012. It's *packed* with
                                                goodness. Stutz and Michels are two no-nonsense therapists who developed
                                                powerful tools to transform our problems into courage, confidence, and
                                                creativity
                                            </p>
                                        </Row>

                                    </Card.Body>
                                </Col>
                                <Col xs={2}>
                                    <CardFlexIcons 
                                    edit={this.props.edit} 
                                    delete={this.props.delete} 
                                    message={this.props.message} 
                                    />
                                </Col>
                            </Row>
                            <CardFooter/>
                        </Col>
                    </Row>
                </Card>
            </div>
        );
    }
}

MyBookstoreResultCard.defaultProps = {
    edit: false,
    delete: false,
    message: false,
}

export default MyBookstoreResultCard;