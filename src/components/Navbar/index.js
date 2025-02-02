import React from 'react';
import {
    NavbarContainer,
    NameContainer,
    UserData,
    UserIcon,
    OptionsContainer,
    LinkNavbar,
    LogOut,
    LogOutPosition
} from './styles';

import { useHistory } from 'react-router-dom';

import { AiOutlineBell } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';

import { getUser } from '../../services/auth'

const Navbar = () => {
    const history = useHistory();
    const userName = getUser().nome

    const Option = ({ name, href }) => {
        return <LinkNavbar href={href}>{name}</LinkNavbar>;
    };

    const options = [
        { name: 'Disciplinas', href: '/disciplinas' },
    ];

    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("usuario")

        history.push('/');
    }

    return (
        <NavbarContainer>
            <NameContainer>
                <UserData>
                    <UserIcon>{userName.charAt(0)}</UserIcon>
                    <span>{userName}</span>
                </UserData>
                <AiOutlineBell fill="#51AFB9" size={25} />
            </NameContainer>
            <OptionsContainer>
                {options.map((option) => {
                    return <Option key={option.href} name={option.name} href={option.href} />;
                })}
            </OptionsContainer>
            <LogOutPosition>
                <LogOut onClick={logout}>
                    <FiLogOut />
                    Sair
                </LogOut>

            </LogOutPosition>
        </NavbarContainer>
    );
};

export default Navbar;
