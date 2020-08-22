import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Alert from '../layout/Alert';
// import PrivateRoute from '../routing/PrivateRoute';
import NotFound from '../pages/NotFound';

import Register from '../auth/Register';
import Login from '../auth/Login';
import HomePage from '../books/home';

const Routes = () => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        {/* Public Routes */}
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />

        <Route exact path="/buy-books" component={HomePage} />
        {/* <Route exact path="/bookstores/:id" component={BookStore} /> */}

        {/* Protected Routes */}
        {/* <PrivateRoute exact path="/add-book" component={ProfileForm} /> */}
        {/* <PrivateRoute exact path="/books/:id" component={ProfileForm} />  */}
        
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
