import React, { Component } from 'react';
import Comment from './Comment';
import './App.css';

export default class Comments extends Component {
	static propTypes = {
		comments: React.PropTypes.array
	};

	render() {
		return (

			<div className='comments'>
				{this.props.comments.map(comment => {
					return <Comment
						commenter={comment.user}
						comment={comment.comment}
						/>;
				})}
			</div>

		);
	}
}