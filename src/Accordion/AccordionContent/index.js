import DateFormat from './DateFormat';
import Frequencies from './Frequencies';
import Statuses from './Statuses';
import './index.scss';

import React from 'react';

export default class AccordionContent extends React.Component {
  render() {
    const { onFrequencyChange, onStatusChange, expanded } = this.props;
    return (
      <div className={`accordion-content ${expanded ? 'expanded' : ''}`}>
        <Frequencies value={1} onChange={onFrequencyChange} />
        <DateFormat title="Date" date=" 2 days ago" />
        <DateFormat title="Last Email Sent" date=" 3 days ago" />
        <Statuses value onChange={onStatusChange} />
      </div>
    );
  }
}
