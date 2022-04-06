import React, { Component } from "react";

import Login from "../auth/login";
import logoImg from "../../../static/images/movieReelImg.png";

export default class Auth extends Component {
	render() {
		return (
			<div className='auth-page-wrapper'>
				<div
					className='left-column'
					style={{
						backgroundImage: `url(${logoImg})`,
					}}
				/>

				<div className='right-column'>
					<Login />
				</div>
			</div>
		);
	}
}
