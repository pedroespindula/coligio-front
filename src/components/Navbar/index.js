import React from 'react';
import { NavbarContainer, NameContainer, OptionsContainer, LinkNavbar, LogOut } from './styles';
import { AiOutlineBell } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';

const Navbar = ({ userName, options }) => {

	const Option = ({ name, href }) => {
		return(
			<LinkNavbar href={href}>
				{name}
			</LinkNavbar>
		);
	};

	return (
		<NavbarContainer>
			<NameContainer> 
				{userName} 
				<AiOutlineBell fill='#51AFB9' size={25} />
			</NameContainer>
			<OptionsContainer>
				{
					options.map((option) => {
						return <Option name={option.name} href={option.href} />
					})
				}
			</OptionsContainer>
			<LogOut>
				<FiLogOut />
				Sair
			</LogOut>
		</NavbarContainer>
	);
}

export default Navbar;