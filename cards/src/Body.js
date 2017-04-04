const posts = [
	{
		user: 'vee',
		userImage: 'http://vindhya.ca/test/vee.jpg',
		date: 'April 2 at 11:47am',
		location: 'Toronto, Ontario',
		image: 'http://vindhya.ca/test/veepic.jpg',
		caption: 'i ate some stuff today',
		likes: 23,
		comments: [
			{
				user: 'dee',
				comment: 'wow!'
			},
			{
				user: 'bob',
				comment: '10/10'
			},
			{
				user: 'vee',
				comment: 'thanks!'
			}
		]
	},
	{
		user: 'dee',
		userImage: 'http://vindhya.ca/test/dee.jpg',
		date: 'April 1 at 7pm',
		location: 'Mississauga, Ontario',
		image: 'http://vindhya.ca/test/deepic.jpg',
		caption: 'i listened to some stuff today',
		likes: 17,
		comments: [
			{
				user: 'vee',
				comment: 'i love that song!'
			},
			{
				user: 'bob',
				comment: '10/10'
			},
			{
				user: 'dee',
				comment: 'thanks!'
			}
		]
	},
	{
		user: 'bob',
		userImage: 'http://vindhya.ca/test/bob.jpg',
		date: 'March 31 at 7pm',
		location: 'Hamilton, Ontario',
		image: 'http://vindhya.ca/test/bobpic.jpg',
		caption: 'i smelled some stuff today',
		likes: 12,
		comments: [
			{
				user: 'vee',
				comment: 'i love that flower!'
			},
			{
				user: 'bob',
				comment: '10/10'
			},
			{
				user: 'bob',
				comment: 'thanks!'
			}
		]
	},
];

import React, { Component } from 'react';
import Card from './Card';
import './App.css';

export default class Body extends Component {
	render() {
		return (
			<div className='body'>
				{posts.map(post => {
					return <Card
						user={post.user}
						userImage={post.userImage}
						date={post.date}
						location={post.location}
						image={post.image}
						caption={post.caption}
						likes={post.likes}
						comments={post.comments}
						/>;
				})}
			</div>
		);
	}
}