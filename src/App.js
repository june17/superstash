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
import SelectBank from './components/Onboarding/SelectBank'
import Income from './components/Onboarding/Income'
import RecurringExpenses from './components/Onboarding/RecurringExpenses'
import Expenses from './components/Expenses/Expenses'
import Goals from './components/Goals/Goals'
import Accounts from './components/Accounts/Accounts'
import Learn from './components/Learn/Learn'

function App() {
  return (
    <Router> {/* In-app navigation */}
      <AuthProvider> {/* Calling auth-provider */}
          <Switch>
            {/* Pages for loggedIn users */}
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
            <PrivateRoute exact path='/editprofile' component={EditProfile} />
            <PrivateRoute exact path='/selectbank' component={SelectBank} />
            <PrivateRoute exact path='/income' component={Income} />
            <PrivateRoute exact path='/recexpense' component={RecurringExpenses} />
            <PrivateRoute exact path='/expenses' component={Expenses} />

            <PrivateRoute exact path='/goals' component={Goals} />
            <PrivateRoute exact path='/accounts' component={Accounts} />
            <PrivateRoute exact path='/learn' component={Learn} />

            {/* Public pages for non-loggedin users */}
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
