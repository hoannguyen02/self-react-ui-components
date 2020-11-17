import React from 'react';
import './index.css';
import AccordionArrow from './AccordionArrow';
import AccordionContent from './AccordionContent';

export default class Accordion extends React.Component {
  render() {
    const { onClick, expanded, title, online, onStatusChange, onFrequencyChange } = this.props;
    return (
      <div className="accordion">
        <div className="accordion-header" onClick={onClick}>
          <span className={`accordion-status ${online ? 'online' : ''}`}></span>
          <span className="accordion-title">{title}</span>
          <span className={`accordion-arrow ${expanded ? 'expanded' : ''}`}>
            <AccordionArrow />
          </span>
        </div>
        <AccordionContent expanded={expanded} onStatusChange={onStatusChange} onFrequencyChange={onFrequencyChange} />
      </div>
    );
  }
}
