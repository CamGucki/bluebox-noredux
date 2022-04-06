import React, { Component } from "react";
import ReactModal from "react-modal";

import MovieForm from "../movies/movie-form";

ReactModal.setAppElement(".app-wrapper");

export default class MovieModal extends Component {
	constructor(props) {
		super(props);
		this.customStyles = {
			content: {
				top: "40%",
				left: "50%",
				right: "auto",
				marginRight: "-50%",
				transform: "translate(-50%,-50%",
				width: "900px",
			},
			overlay: {
				backgroundColor: "rgba(1,1,1,0.75",
			},
		};

		this.handleSuccessfullFormSubmission =
			this.handleSuccessfullFormSubmission.bind(this);
	}

	handleSuccessfullFormSubmission(movie) {
		console.log("movie from movie", movie);
	}
	render() {
		return (
			<ReactModal
				style={this.customStyles}
				onRequestClose={() => {
					this.props.handleModalClose();
				}}
				isOpen={this.props.modalIsOpen}
			>
				<MovieForm
					handleSuccessfullFormSubmission={this.handleSuccessfullFormSubmission}
				/>
			</ReactModal>
		);
	}
}
