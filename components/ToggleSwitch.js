import React, { Component } from 'react';
import {render} from 'react-dom';
import Switch from 'react-toggle-switch';

class ToggleSwitch extends Component {
	constructor(props) {
		super(props);
		this.state = {
			switched: false
		};
	}
 
	toggleSwitch = () => {
		this.setState(prevState => {
			return {
				switched: !prevState.switched
			};
		});
	};
 
	render() {
		return (
			<div>
				{/* Basic Switch */}
				<Switch onClick={this.toggleSwitch} on={this.state.switched}/>
			</div>
		);
	}
}

export default ToggleSwitch;