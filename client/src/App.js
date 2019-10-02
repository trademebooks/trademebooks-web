import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";

import "./css/global/Main.scss";

/* Main Navigation Bar */
import Toolbar from './components/Layout/Navbar/Toolbar/Toolbar';
import SideDrawer from './components/Layout/Navbar/SideDrawer/SideDrawer';
import Backdrop from './components/Layout/Navbar/Backdrop/Backdrop';

/* Footer */
import Footer from "./components/Layout/Footer/Footer";

/* Static Pages */
import AboutPage from "./components/Pages/About/AboutPage";
import ContactPage from "./components/Pages/Contact/ContactPage";

/* Auth - Login and Register  */
import Login from "./components/Auth/Login"
import Register from "./components/Auth/Register"

/* 404 Not Found Page */
import NotFoundPage from "./components/Pages/404Page/NotFoundPage";

/* Main Dynamic Pages */
import HomePage from "./components/Home/HomePage";
import PostBook from "./components/PostBook/PostBook"
import Settings from "./components/Account/AccountSettings"
import Bookstore from "./components/Bookstore/Bookstore"

// Learning
import CoursesPage from "./components/Courses/CoursesPage";

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
                {/* Navigation Bar --- start */}
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
                <SideDrawer show={this.state.sideDrawerOpen}/>
                {backdrop}
                {/* Navigation Bar --- end */}

                {/* Main Body --- start */}
                <main style={{marginTop: '70px', marginLeft: 'auto', marginRight: 'auto'}}>
                    <Switch>
                        <Route exact path="/" component={HomePage}/>

                        <Route path="/about" component={AboutPage}/>
                        <Route path="/contact" component={ContactPage}/>

                        <Route path="/register" component={Register}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/sell-a-book" component={PostBook}/>

                        <Route path="/settings" component={Settings}/>
                        <Route path="/bookstore" component={Bookstore}/>

                        {/* Courses - learning purposes */}
                        <Route path="/courses" component={CoursesPage}/>

                        <Route component={NotFoundPage}/>
                    </Switch>
                </main>
                {/* Main Body --- end */}

                {/* Footer --- start */}
                <Footer/>
                {/* Footer --- end */}
            </div>
        );
    }
}

export default App;
