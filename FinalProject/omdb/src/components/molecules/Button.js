import React from 'react';
import { twMerge } from 'tailwind-merge';
import Text from '../atoms/Text';

const defaultButton =
  'btn-ghost hover:bg-[#272727] active:bg-[#272727] rounded';
const Button = ({ className, textClassName, children, ...otherProps }) => {
  return (
    <button
      className={twMerge('btn btn-warning', defaultButton, className)}
      {...otherProps}>
      <Text className={textClassName}>{children}</Text>
    </button>
  );
};

export default Button;
