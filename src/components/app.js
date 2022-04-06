import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./headernav.js/header";
import Auth from "./pages/auth";
import HomePage from "./pages/home";

export default class App extends Component {
	// constructor(props) {
	// 	super(props);

	// 	this.state = {
	// 		loggedInStatus: "NOT_LOGGED_IN",
	// 	};

	// 	this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
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

	render() {
		return (
			<div className='app'>
				<Router>
					<div className='header-wrapper'>
						{/* <h2>{this.state.loggedInStatus}</h2> */}
						{/* <div className='sign-in-btn'>
							<NavLink to={"/sign-up"}>Sign IN</NavLink>
						</div> */}
						<Header />
					</div>

					<div className='page-container'>
						<Switch>
							<Route exact path='/' component={HomePage} />
							<Route
								key='sign-in-manager'
								path='/sign-up'
								render={(props) => (
									<Auth
										{...props}
										handleSuccessfulLogin={this.handleSuccessfulLogin}
										handleSuccessfulLogout={this.handleSuccessfulLogout}
									/>
								)}
							/>
						</Switch>
					</div>
				</Router>
			</div>
		);
	}
}
