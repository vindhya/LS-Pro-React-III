import React, { Component } from 'react';
import './App.css';

export default class Likes extends Component {
	static propTypes = {
		likes: React.PropTypes.number
	};

	render() {
		return (

			<div className='likes'>
				{this.props.likes} hearts
			</div>

		);
	}
}