import React from 'react'
import Icon1 from '../../images/icon1.svg'
import Icon2 from '../../images/icon2.svg'
import Icon3 from '../../images/icon3.svg'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServiceElements'
const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Reduce Expences</ServicesH2>
                    <ServicesP>We help reduce your burn fees and increase your overall revenue.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>Exclusive early access to premium nft drops from top artists.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>24/7 Support Team </ServicesH2>
                    <ServicesP>Dedicated support team to help you 24/7 all around the world.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
