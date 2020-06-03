import React from 'react';
import Select from '../select';

const SelectExample = () => {
  const handleOnChange = (item) => {
    console.log(item);
  };
  return (
    <div style={{ width: 200 }}>
      <Select
        label="Select with string array"
        options={[1, 2].map((item) => `Option ${item}`)}
        onChange={handleOnChange}
      />
      <Select
        label="Select with object array"
        options={[1, 2].map((item) => ({ name: `Option ${item}`, value: item }))}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default SelectExample;
