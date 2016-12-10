import React from 'react';
import auth from './auth';

class Login extends React.Component {
	
	constructor() {
		super();
		this.state = {
					 error: false
				  }
		this.handleSubmit = this.handleSubmit.bind(this);
	};
	handleSubmit(e) {
        e.preventDefault();

        var email = this.refs.email.value.trim();
        var password = this.refs.password.value.trim();

        // form validation goes here
        if (!email || !password) {
			return this.setState({ errormsg: "Please fill all the fields" })
        }else{
			if (! /^.+@.+\..+$/.test(email)) {
				 return this.setState({ errormsg: "'" + email + "' is not a valid email." })
			}
				auth.login(email, password, (loggedIn) => {
				if (!loggedIn)
				  return this.setState({ errormsg: "Invalid username or password." })

				const { location } = this.props

				if (location.state && location.state.nextPathname) {
					
				  this.props.router.replace(location.state.nextPathname)
				} else {
					
				  this.props.router.replace('/user')
				}
			  })
		}

        console.log('form submitted!');
        // TODO: send request to the server
        this.refs.email.value = '';
        this.refs.password.value = '';
        return;
    };
	render() {
		return (
			<div className="row">
				<div className="container">
				
				<div className="center-block">
					<h4>Login</h4>
					{this.state.errormsg && (
						<p className="error">{this.state.errormsg}</p>
					)}
					
					 <form onSubmit={this.handleSubmit} >
						<div className="form-group">
							<input type='email' ref='email' placeholder='Email address' className='form-control' />
						</div>
						<div className="form-group">
							<input type='password' ref='password' placeholder='Password' className='form-control' />
						</div>
						<div className="form-group">
							<input type='submit' className='btn btn-primary' value='Login' />
						</div>
					</form>
				</div>
				
				</div>
            </div>
		);
	}
}

export default Login;
