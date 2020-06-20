import React, { useState, useCallback, useMemo, useRef } from 'react';
import './index.scss';
import ArrowDown from '../icons/ArrowDown';
import { useClickOutside } from '../hooks';

const Selector = (props) => {
  const { items, onChange, disabled, label, style, classNames } = props;
  const [selectedItem, setSelectedItem] = useState(null);
  const [open, setOpen] = useState(false);

  const ulRef = useRef(null);

  useClickOutside(ulRef, () => setOpen(false));

  const isValidItems = useMemo(() => {
    return items && Array.isArray(items) && items.length > 0;
  }, [items]);

  const handleChange = useCallback((value) => {
    onChange(value);
    setSelectedItem(value);
    setOpen(false);
  }, []);

  const handleToggle = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <div className={`selector ${classNames ? classNames : ''}`} style={style}>
      {label && <label>{label}</label>}
      <button disabled={disabled || !isValidItems} onClick={handleToggle} className={selectedItem ? 'selected' : ''}>
        {selectedItem ? selectedItem : 'Please select'}
        <ArrowDown fill={selectedItem ? '#3074C8' : ''} opacity={disabled ? '0.6' : ''} />
      </button>
      {isValidItems && open && (
        <ul ref={ulRef}>
          {items.map((item, index) => {
            if (typeof item === 'string') {
              return (
                <li key={`${item}${index.toString()}`} onClick={() => handleChange(item)}>
                  {item}
                </li>
              );
            }
            const { title, value } = item;
            return (
              <li key={`${value}${index.toString()}`} onClick={() => handleChange(value)}>
                {title}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Selector;
