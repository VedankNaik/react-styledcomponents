import React from 'react'
import Icon1 from '../../images/image1.svg';
import { CardContainer, CardH1, CardWrapper, Card, CardIcon, CardH2, CardP } from './CardElements'

const Cards = () => {
    return (
        <CardContainer id="cards">
            <CardH1>CardH1</CardH1>
            <CardWrapper>
                <Card>
                    <CardIcon src={Icon1} />
                    <CardH2>CardH2</CardH2>
                    <CardP>CardP</CardP>
                </Card>
                <Card>
                    <CardIcon src={Icon1} />
                    <CardH2>CardH2</CardH2>
                    <CardP>CardP</CardP>
                </Card>
                <Card>
                    <CardIcon src={Icon1} />
                    <CardH2>CardH2</CardH2>
                    <CardP>CardP</CardP>
                </Card>
            </CardWrapper>
        </CardContainer>
    )
}

export default Cards
