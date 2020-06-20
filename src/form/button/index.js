import React from 'react';
import './index.scss';

const Button = (props) => {
  const { title, type, disabled, className, onClick, style, svgIcon } = props;
  return (
    <button
      className={`button ${className ? className : ''} ${svgIcon ? 'svg-icon' : ''}`}
      style={style}
      type={type | 'button'}
      disabled={disabled}
      onClick={onClick}
    >
      {svgIcon}
      <span>{title}</span>
    </button>
  );
};

export default Button;
