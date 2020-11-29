import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Alert from '../layout/Alert'
import PrivateRoute from '../routing/PrivateRoute'
import NotFound from '../pages/NotFound'

import Register from '../auth/register'
import Login from '../auth/login'
import ForgotPassword from '../auth/forgotPassword'
import ResetPassword from '../auth/forgotPassword/resetPassword'

import About from '../pages/about'
import Contact from '../pages/contact'
import Home from '../pages/home'

import Account from '../account'
import BookAdd from '../books/add'
import BookEdit from '../books/edit'
import Bookstore from '../bookstore'
import MyBookstore from '../bookstore/myBookstore'
import ChatApp from '../Chat'

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
        <Route exact path="/forgot-password" component={ForgotPassword} />
        <Route exact path="/reset-password/:token" component={ResetPassword} />

        <Route exact path="/buy-books" component={Home} />
        <Route exact path="/bookstore/:username" component={Bookstore} />

        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />

        {/* Protected Routes */}
        <PrivateRoute exact path="/add-book" component={BookAdd} />
        <PrivateRoute exact path="/books/edit/:bookId" component={BookEdit} />
        <PrivateRoute exact path="/account" component={Account} />
        <PrivateRoute exact path="/my-bookstore" component={MyBookstore} />
        <PrivateRoute exact path="/chat/:userId?" component={ChatApp} />

        <Route component={NotFound} />
      </Switch>
    </>
  )
}

export default Routes
