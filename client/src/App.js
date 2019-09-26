import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";

import Navbar from "./components/Layout/Navbar/Navbar";
import NotFoundPage from "./components/Pages/NotFoundPage";
import HomePage from "./components/Pages/HomePage";
import AboutPage from "./components/Pages/AboutPage";
import ContactPage from "./components/Pages/ContactPage";

import CoursesPage from "./components/Courses/CoursesPage";

import Register from "./components/Auth/Register"
import Login from "./components/Auth/Login"
import PostBook from "./components/PostBook/PostBook"

/* Navbar Here */
import Toolbar from './components/Layout/Navbar/Toolbar/Toolbar';
import SideDrawer from './components/Layout/Navbar/SideDrawer/SideDrawer';
import Backdrop from './components/Layout/Navbar/Backdrop/Backdrop';

class App extends Component {

    state = {
        sideDrawerOpen: false
    };

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen};
        });
    };

    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false});
    };

    render() {
        let backdrop;

        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler}/>
        }

        return (
            <div className="App">
                {/*<Navbar/>*/}

                <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
                <SideDrawer show={this.state.sideDrawerOpen}/>
                {backdrop}

                <main style={{marginTop: '70px', marginLeft: 'auto', marginRight: 'auto'}}>
                    <Switch>
                        <Route exact path="/" component={HomePage}/>

                        <Route path="/about" component={AboutPage}/>
                        <Route path="/contact" component={ContactPage}/>

                        <Route path="/courses" component={CoursesPage}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/PostBook" component={PostBook}/>

                        <Route component={NotFoundPage}/>
                    </Switch>
                </main>
            </div>
        );
    }
}

export default App;
