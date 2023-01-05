import React from 'react';
import TextIcon from '../components/TextIcon';

const Skills = () => {
  const skills = [
    'HTML5',
    'Javascript',
    'ExpressJS',
    'CSS3',
    'React',
    'Java',
    'SQL Server',
    'NextJS',
  ];
  return (
    <div className="flex flex-col justify-center h-[100vh] gap-5 text-dark">
      <span className="text-[72px] font-sans font-bold uppercase text-dark leading-tight ">
        Skills
      </span>
      <span className="font-sans text-2xl">Programming Languages & Tools</span>
      <div className="grid grid-cols-2 grid-rows-4 gap-5">
        {skills?.map((skill) => {
          return (
            <TextIcon
              icon={'check'}
              iconClassName={'w-6 h-6 text-white'}
              fillIcon={'green'}>
              {skill}
            </TextIcon>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
