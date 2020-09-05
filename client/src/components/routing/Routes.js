import React from "react";
import { Route, Switch } from "react-router-dom";

import Alert from "../layout/Alert";
import PrivateRoute from "../routing/PrivateRoute";
import NotFound from "../pages/NotFound";

import Register from '../auth/Register';
import Login from '../auth/Login';
import Home from '../books/home';
import Account from '../account';
import BookAdd from '../books/add';
// import BookAdd from '../books/add/PostBook';

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

        <Route exact path="/buy-books" component={Home} />
        {/* <Route exact path="/bookstores/:id" component={BookStore} /> */}

        {/* Protected Routes */}
        <PrivateRoute exact path="/add-book" component={BookAdd} />
        <PrivateRoute exact path="/account" component={Account} />

        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default Routes;
