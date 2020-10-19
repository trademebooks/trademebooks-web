import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Alert from '../layout/Alert'
import PrivateRoute from '../routing/PrivateRoute'
import NotFound from '../pages/NotFound'

import Register from '../auth/register'
import Login from '../auth/login'
import Contact from '../pages/contact'
import Home from '../pages/home'
import Account from '../account'
import BookAdd from '../books/add'
import Bookstore from '../bookstore'
import MyBookstore from '../bookstore/myBookstore'
import About from '../about'

const Routes = () => {
  return (
    <>
      <div className="container">
        <Alert />
      </div>
      <Switch>
        {/* Public Routes */}
        <Route exact path="/about" component={About} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/contact" component={Contact} />

        <Route exact path="/buy-books" component={Home} />
        <Route exact path="/bookstore/:username" component={Bookstore} />

        {/* Protected Routes */}
        <PrivateRoute exact path="/add-book" component={BookAdd} />
        <PrivateRoute exact path="/account" component={Account} />
        <PrivateRoute exact path="/my-bookstore" component={MyBookstore} />

        <Route component={NotFound} />
      </Switch>
    </>
  )
}

export default Routes
