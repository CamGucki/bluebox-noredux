import React, { Component } from "react";
import axios from "axios";

export default class MovieForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: "",
			category: "",
			movieImg: "",
			description: "",
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		axios
			.post("http://127.0.0.1:5000/movie", {
				title: this.state.title,
				description: this.state.description,
				category: this.state.category,
				movieImg: this.state.movieImg,
			})
			.then((response) => {
				this.props.handleSuccessfullFormSubmission(response.data);
			});

		event.preventDefault();
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					value={this.state.title}
					placeholder='Movie title'
					name='title'
					onChange={this.handleChange}
					type='text'
				/>
				<input
					value={this.state.category}
					placeholder='Movie Category'
					name='category'
					onChange={this.handleChange}
					type='text'
				/>
				<input
					value={this.state.description}
					placeholder='Movie Description'
					name='description'
					onChange={this.handleChange}
					type='text'
				/>
				<input
					value={this.state.movieImg}
					placeholder='Image URL'
					name='movieImg'
					onChange={this.handleChange}
					type='text'
				/>

				<button>Save</button>
			</form>
		);
	}
}
