import React, { Component } from 'react';
import Likes from './Likes';
import Caption from './Caption';
import Comments from './Comments';
import NewComment from './NewComment';
import './App.css';

export default class Social extends Component {
	static propTypes = {
		user: React.PropTypes.string,
		caption: React.PropTypes.string,
		likes: React.PropTypes.number,
		comments: React.PropTypes.array
	};

	render() {
		return (

			<div className='social'>
				<Likes
					likes={this.props.likes}
					/>
				<Caption
					user={this.props.user}
					caption={this.props.caption}
					/>
				<Comments
					comments={this.props.comments}
					/>
				<hr />
				<NewComment />
			</div>

		);
	}
}