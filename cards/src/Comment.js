import React, { Component } from 'react';
import './App.css';

export default class Comment extends Component {
	static propTypes = {
		commenter: React.PropTypes.string,
		comment: React.PropTypes.string
	};

	render() {
		return (

			<div className='comment'>
				<a href='#'>{this.props.commenter}</a>
				{this.props.comment}
			</div>

		);
	}
}