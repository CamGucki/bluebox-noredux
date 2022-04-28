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
			ratingValue: "",
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		axios
			.post("https://cjb-bbreviews.herokuapp.com/movie", {
				title: this.state.title,
				description: this.state.description,
				category: this.state.category,
				movieImg: this.state.movieImg,
				ratingValue: this.state.ratingValue,
			})
			.then((response) => {
				console.log("success");
				this.props.handleSuccessfullFormSubmission(response.data);
			});
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}
	render() {
		return (
			<form
				onSubmit={this.handleSubmit}
				className='add-movie-form'
				onChange={this.handleChange}
			>
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

				<button className='add-movie-btn'>Save</button>
			</form>
		);
	}
}
