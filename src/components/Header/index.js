import React from 'react';

import { HeaderContainer, Title, Link } from './styles';

const Header = () => {
	return (
		<HeaderContainer>
            <Link href="/"> <Title> colig.io </Title> </Link>
		</HeaderContainer>
	);
}

export default Header;
