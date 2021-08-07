import React from 'react';
import { Button } from 'react-scroll';
import { SectionContainer, SectionWrapper, SectionRow,
     Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img} from './SectionEllements';

const Sections = (id) => {
    return (
        <>
            <SectionContainer id={id}>
                <SectionWrapper>
                    <SectionRow>
                        <Column1>
                            <TextWrapper>
                                <TopLine>TopLine</TopLine>
                                <Heading>Heading</Heading>
                                <Subtitle>Subtitle</Subtitle>
                                <BtnWrap>
                                    <Button />
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img />
                            </ImgWrap>
                        </Column2>
                    </SectionRow>
                </SectionWrapper>
            </SectionContainer>  
        </>
    )
}

export default Sections
