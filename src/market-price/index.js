import React from 'react';
import './index.scss';

const MarketPrice = (props) => {
  const { imgUrl, title, value, imgAlt } = props;
  return (
    <div className="market-price">
      <img src={imgUrl} alt={imgAlt} />
      <p>
        {title}
        <span>{value}</span>
      </p>
    </div>
  );
};

export default MarketPrice;
