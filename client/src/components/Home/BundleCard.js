import React from "react";
import './BundleCard.scss';
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardHeader from "./CardHeader.js"
import CardFooter from "./CardFooter.js"
import BundleListItem from "./BundleListItem.js"
import Fair_condition from "../../images/Icons/Fair_condition.png"
import Likenew from "../../images/Icons/Likenew_condition.png"
import Verygood_condition from "../../images/Icons/Verygood_condition.png"
import Good_condition from "../../images/Icons/Good_condition.png"

const BundleCard = () => (
    <div className="card-container">
        <Card>
            <Row>
                <Col xs={10}>
                    <Card.Body>
                        <CardHeader/>
                        <Row className="text text-meta">
                            <span>MCMASTER UNIVERSITY</span>
                            <span>CIV358
                        </span>
                            <span>CIV5481</span>
                        </Row>
                        <Row>
                            <span className="expand-all">expand all</span>
                        </Row>
                        <BundleListItem condition={Fair_condition}/>
                        <BundleListItem condition={Likenew}/>
                        <BundleListItem condition={Verygood_condition}/>
                        <BundleListItem condition={Good_condition}/>
                        <Row>
                            <p className="user-review">The Tools. This was easily the best book I read in
                                2012. It's *packed* with goodness. Stutz and Michels are two no-nonsense
                                therapists who developed powerful tools to transform our problems into courage,
                                confidence, and creativity</p>
                        </Row>

                    </Card.Body>
                </Col>
                <Col xs={2}>

                </Col>
            </Row>
            <CardFooter/>
        </Card>
    </div>
);

export default BundleCard;