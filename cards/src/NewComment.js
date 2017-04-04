import React, { Component } from 'react';
import './App.css';

export default class NewComment extends Component {
	render() {
		return (

			<div className='newComment'>
				<a href='#' className='newCommentFlex1'><img src='http://vindhya.ca/test/heart.ico' alt='' /></a>
				<span className='newCommentFlex2'>Add a comment...</span>
				<a href='#' className='newCommentFlex3'><img src='http://vindhya.ca/test/dotdotdot.png' alt='' /></a>
			</div>

		);
	}
}