/*global chrome*/

import React, { Component } from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';
import Profile from './Profile.js';
import Login from './Login.js';
import Signup from './Signup.js';
import Dashboard from './Dashboard.js';
import About from './About.js';


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class Toolbar extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = { isOpen: false };
	}

	toggle() {
		this.setState({ isOpen: !this.state.isOpen });
	}

	goHome() {
		//TODO: check tags already open. If homepage is one, go there; else create new tab
		//TODO: Change content of "root" to homepage content
		//this.props.updatePageCB('dash');
		//window.open("index.html", "_blank");
		chrome.tabs.create({url:"/"});
	}
	
	render() {
		return (
		<Router><div>
			<Navbar color="dark" light expand="md">
				<NavbarBrand><NavLink to="/">HayStakk</NavLink></NavbarBrand>
				<NavbarToggler onClick={this.toggle} />
				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav className="ml-auto" navbar>
						<NavItem>
							<NavLink to="/Profile" exact activeStyle={
								{ color:'green' }
							}>Profile</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to="/Signup" exact activeStyle={
								{ color:'green' }
							}>Signup</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to="/Login" exact activeStyle={
								{ color:'green' }
							}>Login</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to="/About" exact activeStyle={
								{ color:'green' }
							}>About</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
			
			<Route exact path="/" component={Dashboard} />
			<Route path="/About" component={About} />
			<Route path="/Profile" component={Profile} />
		</div></Router>
		);
	}
}

export default Toolbar;