import React, { Fragment } from 'react';
import Timeline from '../components/Timeline';

const Experience = () => {
  const experiences = [
    {
      title: 'B2B Frontend Developer',
      date: 'July 2020 - Present',
      subtitle: 'PT. Erajaya Swasembada Tbk',
      desc: 'Responsible for building, developing, maintaining B2B Frontend web app with NextJS',
    },
    {
      title: 'Database Administrator',
      date: 'September 2018 - February 2020',
      subtitle: 'Bina Nusantara University',
      desc: 'Maintaining Lab Transaction Data (Exam, Absence, Score, & Class Allocation)',
    },
    {
      title: 'Teaching Assistant',
      date: 'February 2017 - September 2018',
      subtitle: 'Bina Nusantara University',
      desc: 'Teaching programming classes, Train new Assistant, Scoring student assignments & projects, Case Making',
    },
  ];
  return (
    <div className="flex flex-col justify-center h-[100vh] gap-5">
      <span className="text-[72px] font-sans font-bold uppercase text-dark leading-tight ">
        Experience
      </span>
      {experiences?.map((exp, idx) => {
        const { title, subtitle, date, desc } = exp;
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

export default Experience;
