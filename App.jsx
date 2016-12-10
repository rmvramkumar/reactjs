import React from 'react';
import { Link, IndexLink } from 'react-router';
import auth from './auth';

class App extends React.Component {
 
  constructor(props) {
      super(props);
	 this.state = {
         loggedIn: auth.loggedIn()
      }
     
      this.updateAuth = this.updateAuth.bind(this)
   };
   

  updateAuth(loggedIn) {
    this.setState({
      loggedIn
    })
  };

  componentWillMount() {
    auth.onChange = this.updateAuth
    auth.login()
  };

   render() {
      return (
			<div>
        <ul className="header">
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><Link to="/user" activeClassName="active">User</Link></li>
          <li>
            {this.state.loggedIn ? (
              <Link to="/logout" activeClassName="active">Log out</Link>
            ) : (
              <Link to="/login" activeClassName="active">Sign in</Link>
            )}
          </li>
          <li><Link to="/contact" activeClassName="active">Contact</Link></li>
        </ul>
        <div className="content">
			{this.props.children}
        </div>
      </div>
           
      );
   }
}

export default App;
