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
import { AiOutlineBell } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';

const Navbar = ({ userName, options }) => {
    const Option = ({ name, href }) => {
        return <LinkNavbar href={href}>{name}</LinkNavbar>;
    };

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
                <LogOut>
                    <FiLogOut />
                    Sair
                </LogOut>

            </LogOutPosition>
        </NavbarContainer>
    );
};

export default Navbar;
