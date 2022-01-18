import React, { useState } from 'react';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroBtnWrapper, HeroH1, HeroP, ArrowForward, ArrowRight, ImageBg, ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard1, ServicesCard2, ServicesCard3, ServicesIcon, ServicesH2, ServicesP } from './HeroElements';
import video from '../../video/video.mp4';
import image from '../../images/hero.jpg';
import { Button } from '../ButtonElement';
import Icon1 from '../../images/image1.svg'
import Icon2 from '../../images/image1.svg'
import Icon3 from '../../images/image1.svg'
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
                            <ServicesH2>Reduce Expences</ServicesH2>
                            <ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP>
                        </ServicesCard1>
                        <ServicesCard2>
                            <ServicesIcon src={Icon2} />
                            <ServicesH2>Virtual Offices</ServicesH2>
                            <ServicesP>You can access our platform online anywhere in the world.</ServicesP>
                        </ServicesCard2>
                        <ServicesCard3>
                            <ServicesIcon src={Icon3} />
                            <ServicesH2>Premium Benefits </ServicesH2>
                            <ServicesP>Unlock our special membership card that return.</ServicesP>
                        </ServicesCard3>
                    </ServicesWrapper>
                </ServicesContainer>
                <HeroBg>
                    <HeroContent >
                        <HeroH1>Virual Banking Made Easy</HeroH1>
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
