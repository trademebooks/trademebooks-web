import Card from "react-bootstrap/Card"
import React from "react";
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import './CardHeader.scss';
import Verygood_condition from "../../images/Icons/Verygood_condition.png"
const SingleHeader = () => <Row>
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
        offset: 4
    }}>
        <img height="25px" src ={Verygood_condition} alt="test"/>
    </Col>
</Row>;

const BundleHeader = () => <Row>
    <Col lg={{
        span: 7
    }} className="cardTitle">
        <Card.Title>
            <span className="title">CALCULUS: EARLY TRANSCENDENTALS</span>
        </Card.Title>
    </Col>
</Row>;

const CardHeader = (props) => {
    if (props.single) {
        return <SingleHeader/>
    }
    return <BundleHeader/>
}

export default CardHeader;