import React from 'react';
import Image1 from '../../images/image1.svg';
import { SectionContainer, SectionWrapper, SectionRow,
     Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img} from './SectionElements';

const Sections = ({lightBg, id, imgStart, topLine, lightText, 
    headLine, description, darkText ,buttonLabel, alt}) => {
    return (
        <>
            <SectionContainer lightBg={lightBg} id={id}>
                <SectionWrapper>
                    <SectionRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={Image1} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </SectionRow>
                </SectionWrapper>
            </SectionContainer>  
        </>
    )
}

export default Sections
