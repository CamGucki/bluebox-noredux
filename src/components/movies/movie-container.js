import React, { Component } from "react";
import axios from "axios";

import MovieItem from "./movie-item";
import MovieModal from "../modals/movie-modal";

export default class MovieContainer extends Component {
	constructor() {
		super();

		this.state = {
			isLoading: false,
			data: [],
			movieModalIsOpen: false,
		};

		this.handleFilter = this.handleFilter.bind(this);
		this.getMovies = this.getMovies.bind(this);
		this.handleNewMovieClick = this.handleNewMovieClick.bind(this);
		this.handleModalClose = this.handleModalClose.bind(this);
	}

	handleModalClose() {
		this.setState({ movieModalIsOpen: false });
	}

	handleNewMovieClick() {
		this.setState({ movieModalIsOpen: true });
	}

	handleFilter(filter) {
		if (filter === "CLEAR_FILTER") {
			this.getMovies();
		} else {
			this.getMovies(filter);
		}
	}
	getMovies(filter = null) {
		axios
			.get(" http://127.0.0.1:5000/movies")
			.then((response) => {
				if (filter) {
					this.setState({
						data: response.data.filter((movie) => {
							return movie.category === filter;
						}),
					});
				} else {
					this.setState({
						data: response.data,
					});
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}

	movieItems() {
		return this.state.data.map((movie) => {
			console.log("movie data", movie);
			return (
				<MovieItem
					key={movie.id}
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
				<div className='new-movie-link'>
					<a onClick={this.handleNewMovieClick}>+ Add Movie</a>
				</div>

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
					<button
						className='category-btn'
						onClick={() => this.handleFilter("CLEAR_FILTER")}
					>
						ALL
					</button>
				</div>
				<div className='addmovie-modal'>
					<MovieModal
						key='modal'
						handleModalClose={this.handleModalClose}
						modalIsOpen={this.state.movieModalIsOpen}
					/>
				</div>

				<div className='movie-items'>{this.movieItems()}</div>
			</div>
		);
	}
}
