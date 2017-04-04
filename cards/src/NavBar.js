import React, { Component } from 'react';
import './App.css';

export default class NavBar extends Component {
	render () {
		return (
			
			<div className='navBar'>
				<div className='logo'><a href='#'>Instagrahamcracker</a></div>
				<form className='search'><input type='text' placeholder='Search' /></form>
				<a className='profileIcon' href='#'><img src='http://vindhya.ca/test/profile.png' alt='' /></a>
			</div>
		);
	}
}