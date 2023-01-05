import React from 'react';
import MainSection from '../templates/MainSection';
import Navbar from '../templates/Navbar';
import ContentSection from '../templates/ContentSection';
import FooterSection from '../templates/FooterSection';

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <MainSection />
      <ContentSection />
      <FooterSection />
    </div>
  );
};

export default Home;
