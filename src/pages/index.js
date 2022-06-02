import React, { useState, useEffect } from 'react';
import HeroSection from '../components/heroSection';
import InfoSection from '../components/infoSection';
import { homeObjOne } from '../components/infoSection/data';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import Innovative from '../components/innovate';
import { ClipLoad, LoadDiv, MainDiv } from './pagesElements';

const Home = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1800);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {loading ? (
        <LoadDiv>
          <ClipLoad
            speedMultiplier={1.5}
            size={40}
            height={55}
            color={'#36C1D7'}
            loading={loading}
          />
        </LoadDiv>
      ) : (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle} />
          <HeroSection />
          <InfoSection {...homeObjOne} />
          <Innovative />
        </>
      )}
    </>
  );
};

export default Home;
