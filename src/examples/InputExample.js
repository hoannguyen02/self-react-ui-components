import React, { useCallback, useState } from 'react';
import Input from '../form/input';

const InputExample = () => {
  const [mileAge, setMileAge] = useState(0);

  const handleOnChange = useCallback((value) => {
    if (value < 0) {
      setMileAge(0);
    } else if (value > 100) {
      setMileAge(100);
    } else {
      setMileAge(value);
    }
  }, []);
  return <Input label="Mileage (km)" type="number" min={0} max={100} value={mileAge} onChange={handleOnChange} />;
};

export default InputExample;
