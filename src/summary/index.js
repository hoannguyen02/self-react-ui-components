import React from 'react';
import SummaryItem from './SummaryItem';

const Summary = (props) => {
  const { items } = props;
  return (
    <>
      {items && Array.isArray(items) && items.map((item, index) => <SummaryItem key={`Summary${index}`} item={item} />)}
    </>
  );
};

export default Summary;
