import React, {Component} from "react";
import * as Constants from "../../utilities/Constants";
import axios from "axios";

class HomePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            books: ""
        };
    }

    componentDidMount() {
        axios.get(Constants.GET_ALL_PUBLIC_BOOKS_URL)
            .then((response) => {
                let data = response.data;
                console.log(data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <h1>Home Page</h1>
                Welcome to the TMB frontend
                <br/>

                last message at Tuesday 12:08, June 19th, 2019
            </div>
        );
    }
}

export default HomePage;