import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			password: "",
		};

		this.handleChange = this.handleChange.bind(this);
		// this.handleSubmit = this.handleSubmit.bind(this);
		this.handleSignup = this. handleSignup.bind(this)
	}

	
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}

	handleSignup(event) {
		axios
			.post("http://127.0.0.1:5000/user", {
				
					name: this.state.name,
					password: this.state.password,
				
			},
				 {withCredentials: true}
			)
			.then((response) => {
				console.log("response", response);
			});
		event.preventDefault();
	}

	render() {
		return (
			<div>
				<h1>Login to start rating movies!</h1>
				<form onSubmit={this.handleSignup}>
					<input
						type='name'
						name='name'
						placeholder='Your Name'
						value={this.state.name}
						onChange={this.handleChange}
					/>
					
					<input
						type='password'
						name='password'
						placeholder='Your Password'
						value={this.state.password}
						onChange={this.handleChange}
					/>

					<div>
						<button type='submit'>Sign up</button>
					</div>
				</form>
			</div>
		);
	}
}
