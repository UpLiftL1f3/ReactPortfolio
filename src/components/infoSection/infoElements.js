import styled from 'styled-components';
import { Button } from '../buttonElement';

export const InfoContainer = styled.div`
  background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '010606')};
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
    flex-direction: column;
    justify-content: center;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 1;
  height: 100vh
  width: 100vh;
  margin-right: auto;
  margin-left: auto;
  padding: 5% 14%;
  gap: 10%;

  @media screen and (max-width: 1080px){
    flex-direction: column;
    justify-content: center;
    
  }

`;

// export const InfoRow = styled.div`
//   display: grid;
//   grid-auto-columns: minmax(auto, 1fr);
//   align-items: center;
//   grid-template-areas: ${({ imgStart }) =>
//     imgStart ? `'col2 col1'` : `'col1 col2'`};

//   @media screen and (max-width: 768px) {
//     grid-template-areas: ${({ imgStart }) =>
//       imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
//   }
// `;

export const Column1 = styled.div`
  display: flex;
  width: 100%
  margin-bottom: 15px;
  padding: 0px;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
  width: 100%;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 1080px) {
    justify-content: center;
  }
`;

export const TopLine = styled.p`
  color: #36c1d7;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;

  @media screen and (max-width: 780px) {
    text-align: center;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: bolder;
  color: ${({ lightText }) => (lightText ? '#000' : '010606')};

  @media screen and (max-width: 780px) {
    text-align: center;
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  // color: ;
  max-width: 440px;
  margin-bottom: 35;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? '#010606' : 'fff')};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;

  @media screen and (max-width: 1080px) {
    justify-content: center;
  }
`;

export const ImgWrap = styled.div`
  display: flex;
  max-width: 100%;
  height: 100%;
  justify-content: end;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const Img = styled.img`
  display: flex;
  width: 80%;
  margin: 0 0 10px 0;
  justify-content: end;
  // padding-left: 25%;
`;

export const InfoButton = styled(Button)`
  margin-top: 5%;
  color: #495057;
  font-weight: bold;
  background-color: #36c1d7;
`;
