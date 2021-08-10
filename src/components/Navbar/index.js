import React, { useState , useEffect} from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}> VEDANK </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='intro1' 
                            smooth={true} duration={500} spy={true} offset={-80}>Something1</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='intro2'
                            smooth={true} duration={500} spy={true} offset={-80}>Something2</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='intro3'
                            smooth={true} duration={500} spy={true} offset={-80}>Something3</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>                
            </Nav>
        </IconContext.Provider>
        </>
    ) 
}

export default Navbar;
