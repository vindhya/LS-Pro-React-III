import React, { Component } from 'react';
import './App.css';

export default class Caption extends Component {
	static propTypes = {
		user: React.PropTypes.string,
		caption: React.PropTypes.string
	};

	render() {
		return (

			<div className='caption'>
				<a href='#'>{this.props.user}</a> {this.props.caption}
			</div>

		);
	}
}