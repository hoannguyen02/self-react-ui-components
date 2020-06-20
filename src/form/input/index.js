import React, { useCallback } from 'react';
import './input.scss';

const Input = (props) => {
  const { error, label, onBlur, onChange, value, width, ...rest } = props;

  const style = {
    ...(width && { width }),
  };

  const handleOnBlur = useCallback(
    (event) => {
      const { value } = event.target;
      onBlur && onBlur(value);
    },
    [onBlur]
  );

  const handleOnChange = useCallback(
    (event) => {
      const { value } = event.target;
      onChange && onChange(value);
    },
    [onChange]
  );

  return (
    <div className={`input`} style={style}>
      {label && <label>{label}</label>}
      <input
        onBlur={handleOnBlur}
        value={value}
        {...rest}
        className={`${value ? 'selected' : ''}`}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default Input;
