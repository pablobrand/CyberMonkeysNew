import React from 'react';

const Slider = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { className } = props;
  return (
    <button
      {...props}
       //className={`rounded-xl bg-blue-600 text-white py-3 px-4 uppercase ${className}`}
    ></button>
  );
};

export default Slider;
