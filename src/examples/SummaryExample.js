import React from 'react';
import Summary from '../summary';
import { SummaryIconType } from '../constants';
const ITEMS = [
  { title: 'Year', value: 300, iconType: SummaryIconType.YEAR },
  { title: 'Mileage(km)', value: 20000, iconType: SummaryIconType.YEAR },
];
const SummaryExample = () => {
  return <Summary items={ITEMS} />;
};

export default SummaryExample;
