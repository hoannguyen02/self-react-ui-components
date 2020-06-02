import React, { useEffect } from 'react';
import Backdrop from '../backdrop';
import Overlay from './Overlay';

const Modal = (props) => {
  const { open, onClose } = props;

  const handleKeydown = (e) => {
    const { onClose } = props;
    if (e.keyCode === 27) {
      onClose && onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeydown, false);
    return () => {
      document.removeEventListener('keydown', handleKeydown, false);
    };
  }, []);

  return (
    <div className="root">
      <Backdrop open={open} onClick={onClose} />
      <Overlay {...props} />
    </div>
  );
};

export default Modal;
