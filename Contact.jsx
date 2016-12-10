import React from 'react';

class Contact extends React.Component {
	
	constructor() {
		super();

		this.handleSubmit = this.handleSubmit.bind(this);
	};
	handleSubmit(e) {
        e.preventDefault();

        var author = this.refs.email.value.trim();
        var phone = this.refs.phone.value.trim();
        var message = this.refs.message.value.trim();

        // form validation goes here
        if (!author || !message) {
          return;
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
					<h4>Contact Us</h4>
					 <form onSubmit={this.handleSubmit} >
						<div className="form-group">
							<input type='email' ref='email' placeholder='Email address' className='form-control' />
						</div>
						<div className="form-group">
							<input type='text' ref='phone' placeholder='Mobile Number' className='form-control' />
						</div>
						<div className="form-group">
							<textarea ref="message" placeholder="Message" className='form-control'></textarea>
							
						</div>
						<div className="form-group">
							<input type='submit' className='btn btn-primary' value='Submit' />
						</div>
					</form>
				</div>
				
				</div>
            </div>
		);
	}
}

export default Contact;
