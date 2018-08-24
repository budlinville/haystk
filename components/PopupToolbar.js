/*global chrome*/

import React, { Component } from 'react';
import {render} from 'react-dom';
import $ from 'jquery';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class PopupToolbar extends React.Component {
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
		this.props.updatePageCB('dash');
		window.open("index.html", "_blank");
		//chrome.tabs.create({url: $(this).attr('Homepage.html')});
	}
	
	render() {
		return (
		<div>
			<Navbar color="dark" light expand="md">
				<NavbarBrand href='' onClick={this.goHome}>HayStakk</NavbarBrand>
				<NavbarToggler onClick={this.toggle} />
				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav className="ml-auto" navbar>
						<NavItem>
							<NavLink>Home</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href>Settings</NavLink>
						</NavItem>
						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret>
								Options
							</DropdownToggle>
							<DropdownMenu right>
								<DropdownItem>
									Option 1
								</DropdownItem>
								<DropdownItem>
									Option 2
								</DropdownItem>
								<DropdownItem divider />
								<DropdownItem>
									Reset
								</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
		);
	}
}

export default PopupToolbar;