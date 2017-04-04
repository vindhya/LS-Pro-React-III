import React, { Component } from 'react';
import AuthorBar from './AuthorBar';
import Image from './Image';
import Social from './Social';
import './App.css';

export default class Card extends Component {
	static propTypes = {
		user: React.PropTypes.string,
		userImage: React.PropTypes.string,
		date: React.PropTypes.string,
		location: React.PropTypes.string,
		image: React.PropTypes.string,
		caption: React.PropTypes.string,
		likes: React.PropTypes.number,
		comments: React.PropTypes.array
	};

	render () {
		return (

			<div className='card'>
				<AuthorBar
					user={this.props.user}
					userImage={this.props.userImage}
					date={this.props.date}
					location={this.props.location}
					/>
				<hr />
				<Image
					image={this.props.image}
					/>
				<hr />
				<Social
					likes={this.props.likes}
					user={this.props.user}
					caption={this.props.caption}
					comments={this.props.comments}
					/>
			</div>

		);
	}
}