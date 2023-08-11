import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
        <NavLink to='/' activeStyle>
			Home
		</NavLink> 
		<NavLink to='/Planets' activeStyle>
			Planets
		</NavLink>
		<NavLink to='/SpaceShips' activeStyle>
			SpaceShips
		</NavLink>
		<NavLink to='/People' activeStyle>
			People
		</NavLink>
		<NavLink to='/Vehicle' activeStyle>
			Vehicle
		</NavLink>
		
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		
		
	</Nav>
	</>
);
};

export default Navbar;
