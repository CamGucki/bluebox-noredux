import React, { Component } from "react";
import StarRating from "./starRating";

export default class MovieItem extends Component {
	render() {
		const { id, title, movieImg, rating } = this.props;
		console.log("here", rating);
		return (
			<div className='movie-item'>
				<img className='movie__image' src={movieImg} alt='Logoimg/50x50'></img>
				<div className='movie__title'>{title}</div>
				<StarRating rating={rating} movie_id={id} />
			</div>
		);
	}
}
