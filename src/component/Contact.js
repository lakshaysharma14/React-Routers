import React from 'react';

const Contact = (props) =>
{
	setTimeout( () => 
	{
		props.history.push('/about')           //PROGRAMATIC REDIRECT
	},2000);

	return(
		<div className="container">
			<h4 className="center-align">Contact</h4>
			<p>Contat Me</p>		
		</div>
	)
}

export default Contact;