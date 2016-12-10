import React from 'react';
import auth from './auth';

class Logout extends React.Component {
	componentDidMount() {
		auth.logout();
		this.props.router.replace('/')
	  }
	
	render(){
		return(
			<div>
				<p>You are now logged out</p>
			</div>
		)
	}
}
export default Logout;
