import React, { Component } from "react";
import MovieContainer from "../movies/movie-container";

export default class HomePage extends Component {
	render() {
		return <MovieContainer key='movie-wrapper' />;
	}
}
