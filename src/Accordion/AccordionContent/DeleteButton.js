import React from 'react';

const DeleteButton = (props) => {
  const { title, type, disabled, className, onClick, style } = props;
  return (
    <button
      className={`delete-button ${className ? className : ''}`}
      style={style}
      type={type | 'button'}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default DeleteButton;
