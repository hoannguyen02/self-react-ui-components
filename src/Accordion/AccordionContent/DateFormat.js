import React from 'react';

export default class DateFormat extends React.Component {
  render() {
    const { title, date } = this.props;
    return (
      <p className="date-format">
        <span className="title">{title}</span>
        <span className="date">{date}</span>
      </p>
    );
  }
}
