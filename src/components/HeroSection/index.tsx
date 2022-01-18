import React, { useState } from 'react';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroBtnWrapper, HeroH1, HeroP, ArrowForward, ArrowRight, ImageBg, ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard1, ServicesCard2, ServicesCard3, ServicesIcon, ServicesH2, ServicesP } from './HeroElements';
import video from '../../video/video.mp4';
import image from '../../images/image3.jpg';
import { Button } from '../ButtonElement';
import Icon1 from '../../images/image4.jpeg'
import Icon2 from '../../images/image4.jpeg'
import Icon3 from '../../images/image4.jpeg'
const HeroSection = () => {
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    }
    console.log('HeroSection video', video);
    return (
        <>
            <HeroContainer id="home" image={image}>

                <ServicesContainer >
                    <ServicesWrapper>
                        <ServicesCard1>
                            <ServicesIcon src={Icon1} />
                            <ServicesH2>#3589</ServicesH2>
                        </ServicesCard1>
                        <ServicesCard2>
                            <ServicesIcon src={Icon2} />
                            <ServicesH2>#3589</ServicesH2>
                        </ServicesCard2>
                        <ServicesCard3>
                            <ServicesIcon src={Icon3} />
                            <ServicesH2>#3589</ServicesH2>
                        </ServicesCard3>
                    </ServicesWrapper>
                </ServicesContainer>
                <HeroBg>
                    <HeroContent >
                        <HeroH1>Mint your ape today</HeroH1>
                        <HeroP>Sign up for a new account today and receive $250 in credut towards your next payment</HeroP>
                        <HeroBtnWrapper>
                            <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true" smooth={true} duration={500} spy={true} offset={-80}>Get started {hover ? <ArrowForward /> : <ArrowRight />}</Button>
                        </HeroBtnWrapper>
                    </HeroContent>
                </HeroBg>
            </HeroContainer>
        </>

    )
}

export default HeroSection
