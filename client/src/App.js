import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Landing from './components/layout/Landing'
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
import ReduxToastr from 'react-redux-toastr'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

// global CSS
import './css/global.scss'

import { Provider as RebassProvider, } from 'rebass'

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <Provider store={store}>
      <RebassProvider
        theme={{
          colors: {
            grayxdark: '#202225',
            graydark: '#2f3136',
            graylight: '#36393e',
            graysoft: '#36393f',
            graywhite: '#b9bbbe',
            purple: '#7289da',
            purplesoft: '#677bc4',
            purpledark: '#5b6eae',
          },
          shadows: {
            bottom: '0 1px 0 rgba(0,0,0,.2), 0 2px 0 rgba(0,0,0,.06)',
            right: '0 0 20px rgba(0,0,0,.5), 0 0 21px rgba(0,0,0,.06)',
          },
        }}
      >
        <Router>
          <>
            <Navbar />

            <main>
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route component={Routes} />
              </Switch>
            </main>

            <ReduxToastr
              timeOut={3000}
              newestOnTop={false}
              preventDuplicates
              position="top-right"
              getState={(state) => state.toastr}
              transitionIn="fadeIn"
              transitionOut="fadeOut"
              closeOnToastrClick
            />

            <Footer />
          </>
        </Router>
      </RebassProvider>
    </Provider>
  )
}

export default App
