import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './css/App.css';
import 'toastr/build/toastr.min.css';

import * as actions from './redux/actions';
import Header from './components/Layout/Header';
import Landing from './components/Pages/Landing';
import BuyBooks from "./components/Books/BuyBooks";
import SellBooks from "./components/Books/SellBooks";
import Chat from "./components/Chat/Chat/Chat";
import Settings from "./components/Settings/Settings";
import BookStore from "./components/Books/BookStore";
import NotFound from "./components/Pages/NotFound";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import ChatContainer from "./components/Chat2/ChatContainer";

class App extends Component {

    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Switch>
                            <Route exact path="/" component={Landing}/>
                            <Route exact path="/register" component={Register}/>
                            <Route exact path="/login" component={Login}/>
                            <Route exact path="/buy-books" component={BuyBooks}/>
                            <Route exact path="/sell-books" component={SellBooks}/>
                            <Route exact path="/messages" component={Chat}/>
                            <Route exact path="/chat2" component={ChatContainer}/>
                            <Route exact path="/settings" component={Settings}/>
                            <Route exact path="/bookstore" component={BookStore}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </div>
                </BrowserRouter>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        //courses: state.courses
    };
}

function mapDispatchToProps(dispatch) {
    return actions;
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);