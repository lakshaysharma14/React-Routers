import React, {Component} from 'react';
import axios from 'axios';                  //For grabbing data from a rest api

class Home extends Component
{
	state =
	{
		posts:[]
	}

	componentDidMount()
	{
		axios.get('https://jsonplaceholder.typicode.com/posts') 
		// then function is fired when we get the object from axios.get statement as it as a asynchronous call and //take some time to complete 
		
		.then( res =>
		{
			console.log(res);
			this.setState
			({
				posts:res.data.slice(0,10)
			})
		})
	}

	render()
	{
		const {posts} =this.state;          //DESTRUCTURING
		const postList = posts.length ? (
			posts.map(post =>{
				return(
					<div className="post card" key={post.id}>
						<div className="card-content">
							<span className="card-title">{post.title}</span>
							<p>{post.body}</p>
						</div>
					</div>
				)
			})
		):
		(
			<div className="center">No posts yet</div>
		)

		return(
		
		<div className="container">
			<h4 className="center-align">Home</h4>
			{postList}	
		</div>
		
		)
	}
	
}

export default Home;