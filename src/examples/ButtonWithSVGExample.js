import Button from '../form/button';
import Back from '../icons/Back';
import React from 'react';

const ButtonWithSVGExample = () => (
  <Button title="Back" style={{ border: 'none', color: '#3074C8', paddingLeft: 0 }} svgIcon={<Back />} />
);

export default ButtonWithSVGExample;
