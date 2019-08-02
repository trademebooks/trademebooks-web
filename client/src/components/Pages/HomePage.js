import React, {Component} from "react";
import * as Constants from "../../utilities/Constants";
import axios from "axios";
import Jumbotron from "react-bootstrap/Jumbotron";
import '../../css/HomePage.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchBar from "./SearchBar.js"
import SecondarySearchBar from "./SecondarySearchBar.js";
import SingleResultCard from "./SingleResultCard.js";
import BundleCard from "./BundleCard";
class HomePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            books: []
        };
    }

    componentDidMount() {
        axios
            .get(Constants.GET_ALL_PUBLIC_BOOKS_URL)
            .then((response) => {
                let data = response.data;
                console.log(data);

                this.setState({books: data});
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="content-container">
                <Jumbotron fluid>
                    <div className="main-text">
                        <span>Buy & Sell Textbooks from Canada’s&nbsp;
                            <b>35+&nbsp;
                            </b>
                            Universities and Colleges</span>
                    </div>
                    <div className="caption">
                        Imagine buying and selling textbooks with ease and with minimal effort, using
                        the latest in textbook technology - that is TMB
                    </div>
                    <SearchBar/>
                </Jumbotron>
                <div className="main-content">
                    <div className="header-menu">
                        <Row>
                            <Row className="sortLabels">
                                <Col xs="auto">
                                    <span>Date&nbsp;</span>
                                    <i class="material-icons md-18">arrow_upward</i>
                                </Col>
                                <Col xs="auto">
                                    <span>Price&nbsp;</span>
                                    <i class="material-icons md-18">arrow_upward</i>
                                </Col>
                                <Col xs="auto">
                                    <span>Condition&nbsp;</span>
                                    <i class="material-icons md-18">arrow_drop_down</i>
                                </Col>
                            </Row>
                            <Col md="auto" lg="2">
                                <SecondarySearchBar placeholder="School"/>
                            </Col>
                            <Col md="auto" lg="2">
                                <SecondarySearchBar placeholder="Course Code"/>
                            </Col>
                            <Col
                                xs="auto"
                                lg={{
                                span: "auto",
                                offset: 1
                            }}>
                                <a href="">
                                    Alls</a>
                            </Col>
                            <Col xs="auto">
                                <a href="">
                                    Single Books</a>
                            </Col>
                            <Col xs="auto">
                                <a href="">
                                    Bundles</a>
                            </Col>
                        </Row>
                        <Row className="contentRow">
                            <span className="numResults">Showing 47 Results</span>
                        </Row>
                        <Row className="contentRow">
                            <SingleResultCard/>
                        </Row>
                        <Row className="contentRow">
                            <BundleCard/>
                        </Row>
                    </div>

                </div>
            </div>
        );
    }
}

export default HomePage;
