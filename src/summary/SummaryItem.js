import React from 'react';
import './SummaryItem.scss';

const SummaryItem = ({ item = {} }) => {
  const { iconType, title, value } = item;
  return (
    <div className="summary-item">
      {iconType}
      <span className="summary-item__title">{title}</span>
      <span className="summary-item__value">{value}</span>
    </div>
  );
};

export default SummaryItem;
