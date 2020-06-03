import React from 'react';
import './index.scss';

const Button = (props) => {
  const { title, type, disabled, className, onClick } = props;
  return (
    <button
      className={`default ${className ? className : ''}`}
      type={type | 'button'}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
