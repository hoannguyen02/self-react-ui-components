import React from 'react';
import Dropdown from '../../dropdown';

export default class Frequencies extends React.Component {
  state = {
    items: [1, 6, 12, 24, 168].map((item) => ({
      name: `Every ${item} hours`,
      value: item,
      selected: this.props.value === item,
    })),
  };

  handleOnChange = (value) => {
    const { items } = this.state;
    const { onChange } = this.props;
    const newItems = items.map((item) => ({
      ...item,
      selected: value === item.value,
    }));

    this.setState({
      items: newItems,
    });
    onChange && onChange(value);
  };
  render() {
    return <Dropdown label="Frequencies" items={this.state.items} onChange={this.handleOnChange} />;
  }
}
