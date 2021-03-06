import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

export const HeroContainer = styled.div<{ image: any }>`
    background: #0c0c0c;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 30px;
    height: 100vh;
    z-index: 1;
    :before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgb(0,0,0,0.2) 0%, rgb(0,0,0,0.6) 100%), linear-gradient(180deg, rgb(0,0,0,0.2) 0%, transparent 100%);
        z-index: 1;
    }
    background-image: url(${props => props.image});
background-repeat: no-repeat;
background-size: cover;

@media screen and (max-width: 768px) {
    flex-direction: column;

}
    `;

export const HeroBg = styled.div`
// position: absolute;
// top: 0;
// left: 0;
// right: 0;
// bottom: 0;
// width: 100%;
// height: 100%;
// overflow: hidden;
// display: contents;
z-index: 2;
`;

export const VideoBg = styled.video`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
background: #232a34;
`;

export const ImageBg = styled.img`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
background: #232a34;
`;

export const HeroContent = styled.div`
z-index: 3;
max-width: 1200px;

padding:8px 30px;
display: flex;
flex-direction: column;
align-items: center;
`;

export const HeroH1 = styled.h1`
color: #fff;
font-size: 48px;
text-align: center;

@media screen and (max-width: 768px) {
    font-size: 40px;
}

@media screen and (max-width: 480px) {
    font-size: 32px;
}
`;

export const HeroP = styled.p`
margin-top: 24px;
color: #fff;
font-size: 24px;
text-align: center;
max-width: 600px;

@media screen and (max-width: 768px) {
    font-size: 24px;
}

@media screen and (max-width: 480px) {
    font-size: 18px;
}
`;

export const HeroBtnWrapper = styled.div`
margin-top: 32px;
display: flex;
flex-direction: column;
align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
margin-left: 8px;
font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left: 8px;
font-size: 20px;
`;


export const ServicesContainer = styled.div`

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
z-index:2;


`;

export const ServicesWrapper = styled.div`
max-width:1000px;
margin: 0 auto;
display: flex;
align-items: center;


@media screen and (max-width: 1000px) {
    max-width:700px;
}

// @media screen and (max-width: 768px) {
//     max-width:400px;
// }
// @media screen and (max-width: 460px) {
//     max-width:300px;
// }
`;

export const ServicesCard1 = styled.div`
background:#000;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
border-radius:10px;
max-height:340px;
padding:5px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;
// width: 300px;
// &:hover{
//     transform : scale(1.02);
//     transition: all 0.2s ease-in-out;
//     cursor:pointer;
// }
transform: scale(0.8) rotate3d(2, 10, 2, -10deg);
box-shadow: -5px 7px 7px 2px #2e2d2d;
// height:350px;
`;
export const ServicesCard2 = styled.div`
background:#000;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
border-radius:10px;
max-height:340px;
padding:5px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;
margin-left:-200px;
// width: 300px;
transform: scale(0.9) rotate3d(2, 10, 2, -10deg);
box-shadow: -5px 7px 7px 2px #2e2d2d;
// &:hover{
//     transform : scale(1.02);
//     transition: all 0.2s ease-in-out;
//     cursor:pointer;
// }
// height:350px;
@media screen and (max-width: 640px) {
    margin-left:-150px;
}
`;
export const ServicesCard3 = styled.div`
background:#000;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
border-radius:10px;
max-height:340px;
padding:5px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;
margin-left:-200px;
// width: 300px;
transform: scale(1) rotate3d(2, 10, 2, -10deg);
box-shadow: -5px 7px 7px 2px #2e2d2d;   
// &:hover{
//     transform : scale(1.02);
//     transition: all 0.2s ease-in-out;
//     cursor:pointer;
// }
// height:350px;

@media screen and (max-width: 640px) {
    margin-left:-150px;
}
`;

export const ServicesIcon = styled.img`
// height: 280px;
width: 280px;
border-radius:10px;
margin-bottom:10px;

@media screen and (max-width: 640px) {
    max-width:200px;
}
`;

export const ServicesH1 = styled.h1`
font-size:2.5rem;
color:#fff;
margin-bottom:64px;
color:#fff;

@media screen and (max-width: 480px) {
    font-size:2rem;
}
`;

export const ServicesH2 = styled.h2`
font-size:1rem;
margin-bottom:10px;
color:#fff;
`;

export const ServicesP = styled.p`
font-size:1rem;
text-align:center;
color:#fff;

`;