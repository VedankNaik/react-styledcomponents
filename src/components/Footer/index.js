import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper,
    FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap,
    SocialLogo, WebsiteRights, SocialIcons, SocialIconLink} from './FooterElements';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>Something</FooterLinkTitle>
                                    <FooterLink to="">Something 1</FooterLink>
                                    <FooterLink to="">Something 2</FooterLink>
                                    <FooterLink to="">Something 3</FooterLink>
                                    <FooterLink to="">Something 4</FooterLink>
                                    <FooterLink to="">Something 5</FooterLink>                            
                            </FooterLinkItems>     
                            <FooterLinkItems>
                                <FooterLinkTitle>Something</FooterLinkTitle>
                                    <FooterLink to="">Something 1</FooterLink>
                                    <FooterLink to="">Something 2</FooterLink>
                                    <FooterLink to="">Something 3</FooterLink>
                                    <FooterLink to="">Something 4</FooterLink>
                                    <FooterLink to="">Something 5</FooterLink>                            
                            </FooterLinkItems> 
                        </FooterLinksWrapper>  
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>Something</FooterLinkTitle>
                                    <FooterLink to="">Something 1</FooterLink>
                                    <FooterLink to="">Something 2</FooterLink>
                                    <FooterLink to="">Something 3</FooterLink>
                                    <FooterLink to="">Something 4</FooterLink>
                                    <FooterLink to="">Something 5</FooterLink>                            
                            </FooterLinkItems>     
                            <FooterLinkItems>
                                <FooterLinkTitle>Something</FooterLinkTitle>
                                    <FooterLink to="">Something 1</FooterLink>
                                    <FooterLink to="">Something 2</FooterLink>
                                    <FooterLink to="">Something 3</FooterLink>
                                    <FooterLink to="">Something 4</FooterLink>
                                    <FooterLink to="">Something 5</FooterLink>                            
                            </FooterLinkItems> 
                        </FooterLinksWrapper>                  
                    </FooterLinksContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to='/' onClick={toggleHome}>
                                VEDANK
                            </SocialLogo>
                            <WebsiteRights>VEDANK {new Date().getFullYear()}</WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href="//www.facebook.com" target="_blank" aria-label="Facebook">
                                    <FaFacebook />
                                </SocialIconLink>
                                <SocialIconLink href="" target="_blank" aria-label="Instagram">
                                    <FaInstagram />
                                </SocialIconLink>
                                <SocialIconLink href="" target="_blank" aria-label="LinkedIn">
                                    <FaLinkedin />
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer> 
            
        </>
    )
}

export default Footer;
