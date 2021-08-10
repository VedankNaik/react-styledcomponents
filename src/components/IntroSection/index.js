import React from 'react';
import Video from '../../videos/IntroBg.mp4';
import { IntroContainer, IntroBg, VideoBg, IntroContent, IntroH1, IntroP } from './IntroElements'

const IntroSection = () => {
    return (
        <IntroContainer id="Home">
            <IntroBg>
                <VideoBg autoPlay loop muted src={Video} type='IntroBg/mp4' />
            </IntroBg>
            <IntroContent>
                <IntroH1>Head</IntroH1>
                <IntroP>
                    Para
                </IntroP>                
            </IntroContent>
        </IntroContainer>
    )
}

export default IntroSection;
