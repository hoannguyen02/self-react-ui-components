import React from 'react';
import CaretDown from '../icons/CaretDown';
import './index.scss';

const Select = (props) => {
  const { onChange, options, label } = props;
  const handleChange = (event) => {
    const { value } = event.target;
    onChange(value);
  };
  return (
    <div className="select-root">
      {label && <label>{label}</label>}
      <select onChange={handleChange}>
        {Array.isArray(options) &&
          options.map((item) =>
            typeof item === 'string' ? (
              <option key={item}>{item}</option>
            ) : (
              <option key={item.name} value={item.value}>
                {item.name}
              </option>
            )
          )}
      </select>
      <CaretDown />
    </div>
  );
};

export default Select;
