import React from 'react';

const CaretDown = (props) => {
  const { className, fill, opacity, focusable } = props;
  return (
    <svg
      className={`arrow-down ${className ? className : ''}`}
      width="10"
      height="8"
      viewBox="0 0 10 8"
      fill="none"
      focusable={focusable | false}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity={opacity ? opacity : '1'}
        d="M4.13397 7.5C4.51887 8.16667 5.48113 8.16667 5.86603 7.5L9.33013 1.5C9.71503 0.833334 9.2339 0 8.4641 0H1.5359C0.766098 0 0.284973 0.833333 0.669873 1.5L4.13397 7.5Z"
        fill={fill || 'black'}
      />
    </svg>
  );
};

export default CaretDown;
