import React, { useState, useEffect } from 'react';
import { BigSquare, Img, ImgContainer } from './innovateElements';
import G from '../../images/G.jpg';
import I from '../../images/I.jpg';
import L from '../../images/L.jpg';

const Innovative = () => {
  const bounceTransition = {
    y: {
      duration: 0.5,
      repeat: Infinity,
      ease: 'easeOut',
    },
  };
  const bounceAnimate = {
    y: ['100%, -100%'],
  };

  return (
    <>
      <BigSquare>
        <ImgContainer>
          <Img
            src={G}
            alt="image of the letter G"
            transition={bounceTransition}
            animate={{ rotate: 180 }}
          />
          <Img
            src={I}
            alt="image of the letter I"
            transition={bounceTransition}
            animate={bounceAnimate}
          />
          <Img
            src={L}
            alt="image of the letter I"
            transition={bounceTransition}
            animate={bounceAnimate}
          />
        </ImgContainer>
      </BigSquare>
    </>
  );
};

export default Innovative;
