import React, {Component} from 'react';
import axios from 'axios';                  //For grabbing data from a rest api
import {Link} from 'react-router-dom';
import Pokeball from '../pokeball.png';

class Home extends Component
{
	state =
	{
		posts:[]
	}

	componentDidMount()
	{
		{/* // then function is fired when we get the object from axios.get statement as it as a asynchronous call 	
			and take some time to complete 
		*/}
		
		axios.get('https://jsonplaceholder.typicode.com/posts') 
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
						<img src={Pokeball} alt="A Pokeball" />
						<div className="card-content">
							<Link to = {'/' + post.id} >    {/* example : /12345  */}
								
								<span className="card-title red-text">{post.title}</span>
							
							</Link>
							
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
		
		<div className="container home">
			<h4 className="center-align">Home</h4>
			{postList}	
		</div>
		
		)
	}
	
}

export default Home;