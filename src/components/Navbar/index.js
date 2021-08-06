import React from 'react';
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'> VEDANK </NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='something1'>Something1</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='something2'>Something2</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='something3'>Something3</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>                
            </Nav>
        </>
    ) 
}

export default Navbar;
