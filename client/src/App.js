import React from "react";
import {Route, Switch} from "react-router-dom";

import Navbar from "./components/Layout/Navbar/Navbar.js";
import NotFoundPage from "./components/Pages/NotFoundPage";
import HomePage from "./components/Pages/HomePage";
import AboutPage from "./components/Pages/AboutPage";
import ContactPage from "./components/Pages/ContactPage";

import CoursesPage from "./components/Courses/CoursesPage";

function App() {
    return (
        <div className="App">
            <Navbar/>

            <Switch>
                <Route exact path="/" component={HomePage}/>

                <Route path="/about" component={AboutPage}/>
                <Route path="/contact" component={ContactPage}/>

                <Route path="/courses" component={CoursesPage}/>

                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    );
}

export default App;
