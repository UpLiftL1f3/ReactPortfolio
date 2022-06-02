import React from 'react';
import { default as img } from '../../images/svg1.svg';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TopLine,
  Heading,
  TextWrapper,
  BtnWrap,
  Subtitle,
  Img,
  ImgWrap,
  InfoButton,
} from './infoElements';

const InfoSection = ({
  id,
  imgStart,
  topLine,
  headline,
  lightText,
  dark,
  darkText,
  buttonLabel,
  description,
  alt,
  lightBg,
  primary,
  dark2,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper id="hello">
          {/* <InfoRow imgStart={imgStart}> */}
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{headline}</Heading>
              <Subtitle darkText={darkText}>{description}</Subtitle>
              <BtnWrap>
                <InfoButton
                  to="home"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                  dark2={dark2 ? 1 : 0}
                >
                  {buttonLabel}
                </InfoButton>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2 id="pic">
            <ImgWrap>
              <Img src={img} alt={alt} />
            </ImgWrap>
          </Column2>
          {/* </InfoRow> */}
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
