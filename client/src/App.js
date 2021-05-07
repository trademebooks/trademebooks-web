import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import ReactGA from 'react-ga'

import Navbar from './components/layout/Navbar'
// import Footer from './components/layout/Footer'
import Landing from './components/pages/landing'
import Routes from './components/routing/Routes'

// Redux
import { Provider } from 'react-redux'
import store from './store'
import { loadUser } from './actions/auth'

// mdbootstrap CSS
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'

// toastr
import Alert from './components/layout/Alert'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

// global CSS
import './css/main.scss'

import './config/googleAnalytics'

// Initialize google analytics page view tracking
const history = createBrowserHistory()
history.listen((location) => {
  ReactGA.set({ page: location.pathname }) // Update the user's current page
  ReactGA.pageview(location.pathname) // Record a pageview for the given page
})

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <Provider store={store}>
      <Router history={history}>
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route component={Routes} />
          </Switch>
        </main>
        {/* <Footer /> */}
        <Alert />
      </Router>
    </Provider>
  )
}

export default App
