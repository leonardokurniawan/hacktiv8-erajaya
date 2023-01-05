import React from 'react';
import Icons from '../components/icons/Icons';

const About = () => {
  return (
    <div className="flex flex-col justify-center h-[100vh] gap-5">
      <span className="text-[72px] font-sans font-bold uppercase text-dark leading-tight ">
        Leonardo&nbsp;<span className="text-primary">Kurniawan</span>
      </span>
      <span className="font-sans uppercase font-normal text-xl">
        +6281298261168 •{' '}
        <span className="text-primary">leonkur.me@gmail.com</span>
      </span>
      <span className="font-sans tracking-wider text-lg">
        I am a Web Developer and have contributed to SISCA, MyHomeSchool,
        Deliverinc, and many other projects. My techstack includes ExpressJS &
        ReactJS. ExpressJS for server side development and React for the
        frontend development. I am a Hacktiv8 trainee learning React & React
        Native Basics. Currently working as Frontend Developer at PT. Erajaya
        Swasembada on B2B Division. Former Database Administrator & Teaching
        Assistant at Binus University.
      </span>
      <div className="flex gap-3">
        <a href='https://www.linkedin.com/in/leonardo-kurniawan' target="_blank" rel="noopener noreferrer">
          <button className="bg-gray-600 p-3 font-semibold text-white inline-flex items-center space-x-2 rounded-full">
            <Icons name="linkedin" className="w-3 h-3 fill-current" />
          </button>
        </a>
        <a href='https://github.com/leonardokurniawan' target="_blank" rel="noopener noreferrer">
          <button className="bg-gray-600 p-3 font-semibold text-white inline-flex items-center space-x-2 rounded-full">
            <Icons name="github" className="w-3" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default About;
