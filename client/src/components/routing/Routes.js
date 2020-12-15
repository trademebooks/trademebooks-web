import React from 'react'
import { Route, Switch } from 'react-router-dom'

import PrivateRoute from '../routing/PrivateRoute'
import NotFound from '../pages/notFound'

import Register from '../auth/register'
import Login from '../auth/login'
import ResetPassword from '../password/resetPassword'
import ForgotPassword from '../password/sendEmail'

import About from '../pages/about'
import Contact from '../pages/contact'
import Home from '../pages/home'

import Account from '../account'
import BookAdd from '../books/add'
import BookEdit from '../books/edit'
import PublicBookstore from '../bookstore/publicBookstore'
import AuthBookstore from '../bookstore/authBookstore'
import ChatContainer from '../chat/ChatContainer'

const Routes = () => {
  return (
    <>
      <Switch>
        {/* Public Routes */}
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />

        <Route exact path="/forgot-password" component={ForgotPassword} />
        <Route exact path="/reset-password/:token" component={ResetPassword} />

        <Route exact path="/buy-books" component={Home} />
        <Route exact path="/bookstore/:username" component={PublicBookstore} />

        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />

        {/* Protected Routes */}
        <PrivateRoute exact path="/add-book" component={BookAdd} />
        <PrivateRoute exact path="/books/edit/:bookId" component={BookEdit} />
        <PrivateRoute exact path="/account" component={Account} />
        <PrivateRoute exact path="/my-bookstore" component={AuthBookstore} />
        <PrivateRoute exact path="/chat/:userId?" component={ChatContainer} />

        <Route component={NotFound} />
      </Switch>
    </>
  )
}

export default Routes
