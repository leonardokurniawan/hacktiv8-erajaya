import React from 'react';

const Timeline = ({ title, subtitle, date, desc }) => {
  return (
    <div className="flex flex-col gap-4 text-dark mb-10">
      <div className="flex justify-between items-center">
        <span className="uppercase font-sans text-4xl font-bold">{title}</span>
        <span className="text-primary font-medium text-lg">{date}</span>
      </div>
      <span className="uppercase font-sans text-xl">{subtitle}</span>
      <span>{desc}</span>
    </div>
  );
};

export default Timeline;
