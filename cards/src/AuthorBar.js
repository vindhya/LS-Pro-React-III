import React, { Component } from 'react';
import './App.css';

export default class AuthorBar extends Component {
	static propTypes = {
		user: React.PropTypes.string,
		userImage: React.PropTypes.string,
		date: React.PropTypes.string
	};

	render() {
		return (
			<div className='authorBar'>
				<img className='userImage' src={this.props.userImage} alt='' />
				
				<div className='userAndLocation'>
					<a href='#'>{this.props.user}</a><br />
					<span className='location'>{this.props.location}</span>
				</div>
				
				<div className='date'>
					{this.props.date}
				</div>
			</div>
		);
	}
}