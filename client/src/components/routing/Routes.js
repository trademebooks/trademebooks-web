import React from "react";
import { Route, Switch } from "react-router-dom";

import Alert from "../layout/Alert";
import PrivateRoute from "../routing/PrivateRoute";
import NotFound from "../pages/NotFound";

import Register from "../Auth/Register";
import Login from "../Auth/Login";
import Home from "../Books/home";
import Account from "../account";
import BookAdd from "../Books/add/PostBook";

const Routes = () => {
  return (
    <section className="container">
      <Alert />
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
    </section>
  );
};

export default Routes;
