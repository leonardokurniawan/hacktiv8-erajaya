import React, { Fragment } from 'react';
import Timeline from '../components/Timeline';

const Education = () => {
  const educations = [
    {
      title: 'BINUS University',
      date: 'September 2016 - April 2020',
      subtitle: 'Bachelor of Computer Science',
      desc: 'GPA: 3.46',
    },
  ];
  return (
    <div className="flex flex-col justify-center h-[100vh] gap-5">
      <span className="text-[72px] font-sans font-bold uppercase text-dark leading-tight ">
        Education
      </span>
      {educations?.map((edu, idx) => {
        const { title, subtitle, date, desc } = edu;
        return (
          <Fragment key={idx}>
            <Timeline
              title={title}
              subtitle={subtitle}
              date={date}
              desc={desc}
            />
          </Fragment>
        );
      })}
    </div>
  );
};

export default Education;
