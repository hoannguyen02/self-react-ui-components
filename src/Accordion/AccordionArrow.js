import React from 'react';

function AccordionArrow(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={10}
      height={6}
      viewBox="0 0 10 6"
      fill="none"
      {...props}
    >
      <path
        d="M9 1L5 5 1 1"
        stroke="#4E5DE1"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export default AccordionArrow
