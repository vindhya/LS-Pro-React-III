import React, { Component } from 'react';
import './App.css';

export default class Image extends Component {
	static propTypes ={
		image: React.PropTypes.string
	};

	render() {
		return (

			<img className='image' src={this.props.image} alt='' />

		);
	}
}