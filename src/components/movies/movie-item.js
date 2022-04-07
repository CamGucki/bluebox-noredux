import React, { Component } from "react";
import StarRating from "./starRating";

export default class MovieItem extends Component {
	render() {
		const { title, description, category, movieImg, rating } = this.props;
		return (
			<div className='movie-item'>
				<img className='movie__image' src={movieImg} alt='Logoimg/50x50'></img>
				<div className='movie__title'>{title}</div>
				<StarRating key='star-rate' />
			</div>
		);
	}
}
