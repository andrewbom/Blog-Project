import React from 'react';
import './style.css';
import BlogPost from '../../components/BlogPost';
import Layout from '../../components/Layout';


// import Card from '../../components/UI/Card';

const Post = (props) => {
	console.log(props);

	return (
		<Layout>
			<BlogPost {...props}/>
		</Layout>
	);
}

export default Post;