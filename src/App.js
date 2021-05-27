import LandingPage from './components/LandingPage'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import React from 'react'
import Signup from './components/Signup'
import Signin from './components/Signin'
import { AuthProvider } from './contexts/AuthContext'
import Dashboard from './components/Dashboard'
import PrivateRoute from './components/PrivateRoute'
import Error404 from './components/Error404'
import About from './components/About'

function App() {
  return (
    <Router>
      <AuthProvider>
          <Switch>
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/signin' component={Signin} />
            <Route exact path='/about' component={About} />

            <Route path="*" component={Error404} />
          </Switch>
      </AuthProvider>
      </Router>
  );
}

export default App;
