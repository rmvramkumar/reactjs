import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Home from './Home.jsx';
import Login from './Login.jsx';
import Contact from './Contact.jsx';
import User from './User.jsx';
import Logout from './Logout.jsx';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import auth from './auth';


//ReactDOM.render(<App />, document.getElementById('app'));
function requireAuth(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
     <IndexRoute component={Home}/>
     <Route path="login" component={Login} />
     <Route path="logout" component={Logout} />
     <Route path="user" component={User} onEnter={requireAuth} />
     <Route path="contact" component={Contact} />
    </Route>
  </Router>
), document.getElementById('app'))
