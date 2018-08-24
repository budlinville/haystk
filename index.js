import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';
import App from './App';
import Login from './components/Login.js';
import Signup from './components/Signup.js';

ReactDOM.render(
	<Router><div>
		<Redirect from="" to="/" />
		<Route path="/" component={App} />
		<Route path="/Login" component={Login} />
		<Route path="/Signup" component={Signup} />
	</div></Router>
, document.getElementById('root')
);
registerServiceWorker();