import React, { useState } from 'react';
import Modal from '../modal';

const ModalExample = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button onClick={handleOpen}>Open Modal</button>
      <Modal open={open} title="Modal Example" onClose={handleClose} />
    </>
  );
};

export default ModalExample;
