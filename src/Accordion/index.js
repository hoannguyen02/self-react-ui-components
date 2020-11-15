import React from 'react';
import './index.css';
import AccordionArrow from './AccordionArrow';

export default class Accordion extends React.Component {
    render() {
        const {onClick, expanded, content, title, online} = this.props;
        return <div className="accordion">
            <div className="accordion-header" onClick={onClick}>
                <span className={`accordion-status ${online ? 'online' : ''}`}></span>
                <span className="accordion-title">{title}</span>
                <span className={`accordion-arrow ${expanded ? 'expanded' : ''}`}>
                    <AccordionArrow />
                </span>
            </div>
            {content && <div className={`accordion-content ${expanded ? 'expanded' : ''}`}>{content}</div>}
        </div>
    }
}