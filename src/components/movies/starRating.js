import axios from "axios";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = (props) => {
	const [rating, setRating] = useState(props.rating);

	const starSwitch = (id) => {
		setRating(rating + 1);
		axios
			.put(`https://cjb-bbreviews.herokuapp.com/movie/${id}`, {
				ratingValue: rating,
			})
			.then((response) => {
				setRating;
				console.log("success", response);
			});
	};

	return (
		<div>
			{[...Array(5)].map((star, i) => {
				const ratingValue = i + 1;

				return (
					<label>
						<input
							type='radio'
							name='rating'
							value={ratingValue}
							onClick={() => starSwitch(props.movie_id)}
							onMouseOver={() => setHover(ratingValue)}
							onMouseOut={() => setHover(null)}
						/>
						<FaStar
							className='star'
							color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"}
						/>
					</label>
				);
			})}
		</div>
	);
};
export default StarRating;
