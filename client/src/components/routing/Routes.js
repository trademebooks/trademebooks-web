import React from "react";
import { Route, Switch } from "react-router-dom";

import Alert from "../layout/Alert";
import PrivateRoute from "../routing/PrivateRoute";
import NotFound from "../pages/NotFound";

<<<<<<< HEAD
import Register from "../Auth/Register";
import Login from "../Auth/Login";
import Home from "../Books/home";
import Account from "../account";
import BookAdd from "../Books/add";
// import BookAdd from '../books/add/PostBook';
=======
import Register from '../auth/register';
import Login from '../auth/login';
import Contact from '../pages/contact';
import Home from '../books/home';
import Account from '../account';
import BookAdd from '../books/add';
import Bookstore from '../bookstore';
>>>>>>> master

const Routes = () => {
  return (
    <>
      <div className="container">
        <Alert />
      </div>
      <Switch>
        {/* Public Routes */}
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/contact" component={Contact} />

        <Route exact path="/buy-books" component={Home} />
        <Route exact path="/bookstore/:username" component={Bookstore} />

        {/* Protected Routes */}
        <PrivateRoute exact path="/add-book" component={BookAdd} />
        <PrivateRoute exact path="/account" component={Account} />

        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default Routes;
