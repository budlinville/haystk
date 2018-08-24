import React, { Component } from 'react';
import {render} from 'react-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Login extends Component {
	constructor(props) {
		super(props);
	}
	
	//Taken from: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_login_form
	render() {
		return(
		<div id="LoginBG">
			<div id="Login">
				<h2>Login Form</h2>

				<Form>
					<FormGroup>
						<Input type="email" name="email" id="emailInput" placeholder="Email" />
					</FormGroup>
					<FormGroup>
						<Input type="password" name="password" id="passwordInput" placeholder="password" />
					</FormGroup>
				</Form>
			</div>
		</div>
		);
	}
}

export default Login;