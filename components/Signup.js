import React, { Component } from 'react';
import {render} from 'react-dom';
import ToggleSwitch from './ToggleSwitch';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Signup extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return(
		<div id="SignupBG">
			<div id="Signup">
				<h2>Signup Page</h2>

				<Form>
					<FormGroup>
						<Input type="text" name="fName" id="fName" placeholder="First Name" />
					</FormGroup>
					<FormGroup>
						<Input type="text" name="lName" id="lName" placeholder="Last Name" />
					</FormGroup>
					<FormGroup>
						<Input type="text" name="username" id="username" placeholder="Username" />
					</FormGroup>
					<FormGroup>
						<Input type="email" name="email" id="email" placeholder="Email" />
					</FormGroup>
					<FormGroup>
						<Input type="password" name="password1" id="password1" placeholder="Password" />
					</FormGroup>
					<FormGroup>
						<Input type="password" name="password2" id="password2" placeholder="Confirm Password" />
					</FormGroup>
				</Form>
			</div>
		</div>
		);
	}
}

export default Signup;
