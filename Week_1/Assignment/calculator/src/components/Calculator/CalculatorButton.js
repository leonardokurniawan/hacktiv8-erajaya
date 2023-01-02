import React from 'react';

const Button3D =
  'button rounded cursor-pointer select-none active:translate-y-1 active:[box-shadow:0_2px_0_0_#8a8a8a,0_0px_0_0_#8a8a8a40] active:border-b-[0px] transition-all duration-100 [box-shadow:0_2px_0_0_#8a8a8a,0_4px_0_0_#8a8a8a40] border-b-[1px] border-slate-600';

const CalculatorButton = ({ className, input, action }) => {
  let audio = new Audio('/click.mp3');
  const start = () => {
    audio.play();
  };
  return (
    <div
      className={`bg-gray-400 flex justify-center items-center ${Button3D} ${className}`}
      onClick={() => {
        start();
        action(input);
      }}>
      <span className="text-center text-gray-700">{input}</span>
    </div>
  );
};

export default CalculatorButton;
