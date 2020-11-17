import React from 'react';
import Dropdown from '../dropdown';

export default class DropdownExample extends React.Component {
  state = {
    items: [1, 2].map((item, index) => ({
      name: `Option ${item}`,
      value: `Option ${item}`,
      selected: index === 0,
    })),
  };
  handleOnChange = (value) => {
    const { items } = this.state;
    const newItems = items.map((item) => ({
      ...item,
      selected: value === item.value,
    }));

    this.setState({
      items: newItems,
    });
  };
  render() {
    return (
      <>
        <Dropdown label="Dropdown example" items={this.state.items} onChange={this.handleOnChange} />
      </>
    );
  }
}
