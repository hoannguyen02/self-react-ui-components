import React from 'react';

import Accordion from "../Accordion";

export default class  AccordionExample extends React.Component {
    state = {
        currentAccordion: 0
    }
    
    handleClick = (index) => {
        this.setState({
            currentAccordion: index === this.state.currentAccordion ? -1 : index
        })
    }

    render() {
        return <div style={{maxWidth: 375, margin: 'auto'}}>
            {
                [
                    {title: "Accordion 1", data: "Date 1", lastEmailSent: "Last Email Sent 1"},
                    {title: "Accordion 2", data: "Date 2", lastEmailSent: "Last Email Sent 2"},
                ].map((item, index) => <Accordion key={`accordion${index}`} expanded={this.state.currentAccordion === index} title={item.title} onClick={() => this.handleClick(index)} content={item.lastEmailSent}/>)
            }
        </div>
    }
}