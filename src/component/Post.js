import React , {Component} from 'react';

class Post extends Component
{
	state=
	{
		id:null
	}

	componentDidMount()
	{
		console.log(this.props)     

		//we get all the route information as props automatically when we use Psot component as a route parameter

		let id = this.props.match.params.post_id;

		this.setState
		({
			id:id
		})
	}



	render()
	{
		const {id} =this.state;
		return(
			<div className="container">
				<h4>Route Parameters</h4>
				<h6>{id}</h6>
			</div>



			)
	}
}

export default Post;