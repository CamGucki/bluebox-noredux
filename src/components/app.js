import React, { Component } from "react";
import MovieContainer from "./movies/movie-container";
import Header from "./headernav.js/header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./pages/auth";
import HomePage from "./pages/home";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default class App extends Component {
	// constructor(props) {
	// 	super(props);

	// 	this.state = {
	// 		loggedInStatus: "NOT_LOGGED_IN",
	// 	};

	// 	this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
	// 	this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
	// 	this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);
	// }

	// handleSuccessfulLogin() {
	// 	this.setState({
	// 		loggedInStatus: "LOGGED_IN",
	// 	});
	// }

	// handleSuccessfulLogout() {
	// 	this.setState({
	// 		loggedInStatus: "NOT_LOGGED_IN",
	// 	});
	// }

	// feTch LOG IN DATA

	render() {
		return (
			<div className='app'>
				<div className='header-wrapper'>
					<div className='sign-in-btn'>
						<NavLink to='/sign-up' activeClassName='sign-in__link'>
							Sign IN
						</NavLink>
					</div>
					<Header />
				</div>
				<Router>
					<div className='page-container'>
						<Switch>
							<Route exact path='/' component={HomePage} />
							<Route path='/sign-up' component={SignUp} />
						</Switch>
					</div>
				</Router>
			</div>
		);
	}
}
