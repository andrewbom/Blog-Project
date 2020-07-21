import React from 'react';
import './style.css';
import Card from '../../../components/UI/Card';

const RecentPost = props => {
	return (
		<div style={props.style}>
		  <Card style={{marginBottom: '20px'}}>
		  	<div className="postImageWrapper">
		  		<img src="https://www.filepicker.io/api/file/goruyGsSeCTvRybevMlO/convert?cache=true&crop=0%2C10%2C1024%2C512" alt=""/>
		  	</div>

		  	<div style={{textAlign: 'center'}}>
		  		<span>Featured</span>
		  		<h2>Fitness Mantra To Live Fit Life</h2>
		  		<span>Posted on July 21, 2016 by Sora Blogging Tips</span>
		  		<p>asdfasdfasdfasdfasdffsad</p>
		  		<button>Read More</button>
		  	</div>
		  	
		  </Card>
  	</div>
	);
}

export default RecentPost;