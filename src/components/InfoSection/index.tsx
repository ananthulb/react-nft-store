import React from 'react'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, SubTitle, ImgWrap, Img, BtnWrap } from './InfoElements'
import { Button } from '../ButtonElement';
const InfoSection: any = (props: any) => {
    console.log('InfoSection props', props);
    return (
        <>
            <InfoContainer lightBg={props.lightBg} id={props.id}>
                <InfoWrapper>
                    <InfoRow imgStart={props.imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>
                                    {props.topLine}
                                </TopLine>
                                <Heading lightText={props.lightText}>{props.headline}</Heading>
                                <SubTitle darkText={props.darkText}>{props.description}</SubTitle>
                                <BtnWrap>
                                    <Button to="home" smooth={true} duration={500} spy={true} exact="true" offset={-80} primary={props.primary ? 1 : 0} dark={props.dark ? 1 : 0} >{props.buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={props.img} alt={props.alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
