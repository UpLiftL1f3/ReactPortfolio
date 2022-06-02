import styled from 'styled-components';
import { motion } from 'framer-motion';

export const BigSquare = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #36c1d7;
  height: 500px;
  width: 100%;

  // &: hover{
  //   BigSquare
  // }
`;

export const ImgContainer = styled.div`
  padding: 0% 9% 0 9%;
  background-color: #454545;
  display: flex;
  width: 90%;
  height 90%;
  justify-content: space-between;
  align-items: center;
`;

export const Img = styled(motion.img)`
  display: flex;
  width: 29%;
  height 72%;
  display: flex;
`;
