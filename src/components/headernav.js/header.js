import React, { Component } from "react";
import LogoImg from "../../../static/images/bblogo1.png";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
	render() {
		return (
			<div className='header'>
				<img className='header__img' src={LogoImg} alt='Logoimg/50x50'></img>
			</div>
		);
	}
}
