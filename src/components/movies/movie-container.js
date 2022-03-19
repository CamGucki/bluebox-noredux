import React, { Component } from "react";
import axios from "axios";

import MovieItem from "./movie-item";

export default class MovieContainer extends Component {
	constructor() {
		super();

		this.state = {
			isLoading: false,
			data: [],
		};

		this.handleFilter = this.handleFilter.bind(this);
		this.getMovies = this.getMovies.bind(this);
	}
	getMovies() {
		axios
			.get("http://127.0.0.1:5000/movies")
			.then((response) => {
				console.log(response);
				this.setState({
					data: response.data,
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}

	handleFilter(filter) {
		this.setState({
			data: this.state.data.filter((movie) => {
				return movie.category === filter;
			}),
		});
	}

	movieItems() {
		return this.state.data.map((movie) => {
			console.log("movie data", movie);
			return (
				<MovieItem
					title={movie.title}
					description={movie.description}
					movieImg={movie.movieImg}
				/>
			);
		});
	}
	componentDidMount() {
		this.getMovies();
	}

	render() {
		if (this.state.isLoading) {
			return <div>Loading...</div>;
		}

		return (
			<div className='movie-container'>
				<div className='category-filter'>
					<button
						className='category-btn'
						onClick={() => this.handleFilter("Comedy")}
					>
						Comedy
					</button>
					<button
						className='category-btn'
						onClick={() => this.handleFilter("Romance")}
					>
						Romance
					</button>
					<button
						className='category-btn'
						onClick={() => this.handleFilter("Horror")}
					>
						Horror
					</button>
					<button
						className='category-btn'
						onClick={() => this.handleFilter("Action")}
					>
						Action
					</button>
					<button
						className='category-btn'
						onClick={() => this.handleFilter("Game")}
					>
						Game
					</button>
					<button
						className='category-btn'
						onClick={() => this.handleFilter("Kids/Family")}
					>
						Kids/Family
					</button>
				</div>
				<div className='movie-items'>{this.movieItems()}</div>
			</div>
		);
	}
}
