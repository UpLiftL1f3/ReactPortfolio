import React from 'react';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  HeaderButton,
} from './heroElements';
import Video from '../../video/video.mp4';

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Hobby Turned Profession</HeroH1>
        <HeroP>This is just the beginning!</HeroP>
        <HeroBtnWrapper>
          <HeaderButton>About Me</HeaderButton>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
