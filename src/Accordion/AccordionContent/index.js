import React from 'react';
import DateFormat from './DateFormat';
import Frequencies from './Frequencies';
import Statuses from './Statuses';
import './index.scss';
import DeleteButton from './DeleteButton';

export default class AccordionContent extends React.Component {
  render() {
    const { onFrequencyChange, onStatusChange, expanded, onDelete } = this.props;
    return (
      <div className={`accordion-content ${expanded ? 'expanded' : ''}`}>
        <Frequencies value={1} onChange={onFrequencyChange} />
        <DateFormat title="Date" date=" 2 days ago" />
        <DateFormat title="Last Email Sent" date=" 3 days ago" />
        <Statuses value onChange={onStatusChange} />
        <DeleteButton title="Delete alert" onClick={onDelete} />
      </div>
    );
  }
}
