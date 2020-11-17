import React from 'react';
import './index.scss';
import CaretDown from './CaretDown';

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items,
      selectedItem: props.items ? this.props.items.filter((item) => item.selected)[0] : null,
      open: false,
      closed: false,
      cursor: null,
      selectedByEnterKey: false,
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.items !== this.props.items) {
      this.setState({
        items: nextProps.items,
        selectedItem: nextProps.items ? nextProps.items.filter((item) => item.selected)[0] : null,
      });
    }
  }

  ulRef = React.createRef();

  componentDidMount() {
    document.addEventListener('mousedown', this.handleListener);
    document.addEventListener('touchstart', this.handleListener);
  }

  componentWillMount() {
    document.removeEventListener('mousedown', this.handleListener);
    document.removeEventListener('touchstart', this.handleListener);
  }

  handleListener = (event) => {
    if (!this.ulRef.current || this.ulRef.current.contains(event.target)) {
      return;
    }
    this.setState((prevState) => ({
      ...prevState,
      open: false,
      closed: true,
    }));
  };

  handleKeyDown(event) {
    const { cursor, items, open } = this.state;
    switch (event.keyCode) {
      // ESC
      case 27: {
        if (open) {
          this.setState((prevState) => ({
            ...prevState,
            selectedByEnterKey: false,
            open: false,
          }));
        }
        break;
      }
      // Enter
      case 13:
        if (open) {
          const newSelectedItem = items[cursor];
          newSelectedItem && this.handleChange(newSelectedItem.value || newSelectedItem);
          this.setState((prevState) => ({
            ...prevState,
            selectedByEnterKey: true,
            open: false,
          }));
        }
        break;
      // Up
      case 38:
        cursor > 0 &&
          this.setState((prevState) => ({
            ...prevState,
            cursor: prevState.cursor - 1,
          }));
        break;
      // Down
      case 40:
        cursor < items.length - 1 &&
          this.setState((prevState) => ({
            ...prevState,
            cursor: prevState.cursor + 1,
          }));
        break;

      default:
        break;
    }
  }

  handleChange = (value) => {
    const { onChange } = this.props;
    const { selectedItem } = this.state;
    this.setState((prevState) => ({
      ...prevState,
      open: false,
    }));
    // Don't set selected item and emit onChange event if it's same data
    if (selectedItem && (selectedItem.value === value || selectedItem === value)) {
      return;
    }
    this.setState((prevState) => ({
      ...prevState,
      selectedItem: value,
    }));
    onChange && onChange(value);
  };

  handleToggle = () => {
    const { selectedByEnterKey, closed } = this.state;
    // Don't handle click if user already press enter keyboard
    if (selectedByEnterKey) {
      this.setState((prevState) => ({
        ...prevState,
        selectedByEnterKey: false,
      }));
      return;
    }
    // Don't open if user just closed by double click on button
    if (closed) {
      this.setState((prevState) => ({
        ...prevState,
        closed: false,
      }));
      return;
    }
    this.setState((prevState) => ({
      ...prevState,
      open: !prevState.open,
    }));
  };

  render() {
    const { disabled, label, style, classNames } = this.props;
    const { selectedItem, open, items, cursor } = this.state;
    const isValidItems = items && Array.isArray(items) && items.length > 0;

    return (
      <div
        className={`cpc-selector ${classNames ? classNames : ''}${
          disabled || !isValidItems ? ' disable-component' : ''
        }`}
        style={style}
      >
        {label && <label>{label}</label>}
        <button
          disabled={disabled || !isValidItems}
          onClick={this.handleToggle}
          onKeyDown={(event) => this.handleKeyDown(event)}
          className={selectedItem ? 'selected' : ''}
        >
          {selectedItem ? selectedItem.value : ''}
          <CaretDown fill={selectedItem ? '#3074C8' : disabled || !isValidItems ? '#D2D2D2' : '#666666'} />
        </button>
        {isValidItems && open && (
          <ul ref={this.ulRef}>
            {items.map((item, index) => {
              const { name, value } = item;
              return (
                <li
                  className={`${index === cursor ? 'hover' : ''} ${
                    (selectedItem && selectedItem.value) === value ? 'selected' : ''
                  }`}
                  key={`${value}${index.toString()}`}
                  onClick={() => this.handleChange(value)}
                >
                  {name}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}
