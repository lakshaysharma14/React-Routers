import React from 'react';

import {Link} from 'react-router-dom';    {/* use Link instead of <  a tags Links are fast to operate */}

const Navbar = () =>
{
	return(
		<nav className="nav-wrapper red darken-3">
			<div className="container">
				
			<a className="brand-logo">InterMedia</a>
			
				<ul className="right">
					<li><Link to="/home">Home</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/contact">Contact</Link></li>
				</ul>
			</div>
		</nav>
		
	)
}

export default Navbar;