import React from 'react';
import Dropdown from '../../dropdown';

export default class Statuses extends React.Component {
  state = {
    items: [true, false].map((item) => ({
      name: item ? 'active' : 'inactive',
      value: item,
      selected: this.props.status && this.props.status.toString() === item.toString(),
    })),
  };

  handleOnChange = (value) => {
    const { items } = this.state;
    const { onChange } = this.props;
    const newItems = items.map((item) => ({
      ...item,
      selected: value.toString() === item.value.toString(),
    }));

    this.setState({
      items: newItems,
    });
    onChange && onChange(value);
  };
  render() {
    return <Dropdown label="Status" items={this.state.items} onChange={this.handleOnChange} />;
  }
}
