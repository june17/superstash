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
import ResetPass from './components/ResetPass'
import EditProfile from './components/EditProfile'

function App() {
  return (
    <Router>
      <AuthProvider>
          <Switch>
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
            <PrivateRoute exact path='/editprofile' component={EditProfile} />
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/signin' component={Signin} />
            <Route exact path='/about' component={About} />
            <Route exact path='/resetpass' component={ResetPass} />

            <Route path="*" component={Error404} />
          </Switch>
      </AuthProvider>
      </Router>
  );
}

export default App;
