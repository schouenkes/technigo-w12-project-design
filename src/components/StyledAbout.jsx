import styled, { createGlobalStyle } from "styled-components";
import Lotus from "../assets/lotus.svg";
import Buddha from "../assets/yoga.svg";
import Glasses from "../assets/drink.svg";

export const StyledAboutBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--gap-compact);
  padding-bottom: 80px;
  margin-top: 25px;
  max-width: 1050px;

  @media (min-width: 651px) {
    flex-direction: row-reverse;
    align-items: flex-start;
    margin-top: var(--gap-medium);
    padding-bottom: var(--gap-medium);
  }

  @media (min-width: 1025px) {
    margin-top: var(--gap-big);
    padding-bottom: var(--gap-big);
  }
`;

export const GlobalCarouselStyles = createGlobalStyle`

 .carousel .control-dots {
  position: absolute;
  bottom: -12px;
  margin:40px 0 ;
  width: 100%;
  display: flex;
  justify-content: center;
}

 .carousel .control-dots .dot {
    background: var(--dark-grey); 
    width: 12px;
    height: 12px;
    top: 1px;
    left: 1px;
 }

 .carousel .control-dots .dot.selected {
    background: var(--red);
    width: 12px;
    height: 12px;
    top: 1px;
    left: 1px;
 }
`;

export const LotusIcon = styled(Lotus)`
  width: 20px;
  height: 20px;

  @media (min-width: 651px) {
    width: 28.83px;
    height: 24px;
  }
`;

export const BuddhaIcon = styled(Buddha)`
  width: 20px;
  height: 20px;

  @media (min-width: 651px) {
    width: 28.83px;
    height: 24px;
  }
`;

export const GlassesIcon = styled(Glasses)`
  width: ${(props) => props.$width || "20px"};
  height: ${(props) => props.$height || "20px"};

  @media (min-width: 651px) {
    width: 28.83px;
    height: 24px;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 35px;
  margin-top: 10px;

  @media (min-width: 1025px) {
    margin-top: var(--gap-extra);
  }
`;

export const Slide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--gap-comfortable);
`;

export const AboutInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-compact);
`;

export const AboutTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-comfortable);
  width: 100%;
  margin-bottom: ${(props) => props.$margin || "0"};
  @media (min-width: 651px) {
  }
`;

export const AboutTitleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const AboutOneImage = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;

  @media (min-width: 651px) {
    padding-right: var(--gap-compact);
  }
`;

export const AboutTwoImage = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;

  @media (min-width: 651px) {
    padding-left: var(--gap-compact);
  }
`;

export const MeditaionBox = styled.div`
  display: flex;
  gap: var(--gap-compact);
  margin-top: var(--gap-spacious);
  max-width: 1050px;
  justify-self: center;
`;

export const MeditationText = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-comfortable);
  max-width: 100%;

  @media (min-width: 651px) {
    gap: var(--gap-extra);
  }
`;
