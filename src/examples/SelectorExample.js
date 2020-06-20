import React from 'react';
import Selector from '../selector';

const SelectorExample = () => {
  const handleOnChange = (item) => {
    console.log(item);
  };

  return (
    <div style={{ width: 200 }}>
      <Selector label="Strings" items={[1, 2].map((item) => `Option ${item}`)} onChange={handleOnChange} />
      <Selector
        label="Objects"
        items={[1, 2].map((item) => ({
          title: `Option ${item}`,
          value: `Option ${item}`,
        }))}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default SelectorExample;
