import React from "react";
import {Route, Switch} from "react-router-dom";

import Navbar from "./components/Layout/Navbar/Navbar";
import NotFoundPage from "./components/Pages/NotFoundPage";
import HomePage from "./components/Pages/HomePage";
import AboutPage from "./components/Pages/AboutPage";
import ContactPage from "./components/Pages/ContactPage";

import CoursesPage from "./components/Courses/CoursesPage";

import Register from "./components/Auth/Register"
import Login from "./components/Auth/Login"


function App() {
    return (
        <div className="App">
            <Navbar/>

            <Switch>
                <Route exact path="/" component={HomePage}/>

                <Route path="/about" component={AboutPage}/>
                <Route path="/contact" component={ContactPage}/>

                <Route path="/courses" component={CoursesPage}/>
                <Route path="/register" component={Register}/>
                <Route path="/login" component={Login}/>


                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    );
}

export default App;
