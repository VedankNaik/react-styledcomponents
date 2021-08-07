import React from 'react';
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'> VEDANK </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='intro1'>Something1</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='intro2'>Something2</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='intro3'>Something3</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>                
            </Nav>
        </>
    ) 
}

export default Navbar;
