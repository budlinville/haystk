/*global chrome*/

import React, { Component } from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Link, NavLink, Redirect } from 'react-router-dom'; 
import Route from 'react-router-dom/Route';
import Toolbar from './components/Toolbar.js';
import Signup from './components/Signup.js';

class App extends Component {
	state = {
		loggedIn:false,
		page:'popup'
	}

	loginHandle = () => {
		this.setState(prevState => ({
			loggedIn: !prevState.loggedIn
		}))
	}

	updatePageState = (p) => {
		this.setState({ page: p });
	}
	
	//TODO: if session logged in, render Signup page; else render dashboard
	render() {
		return(
			<div>
				<Toolbar />
				{this.props.children}
			</div>
		);
	}
}

export default App;
