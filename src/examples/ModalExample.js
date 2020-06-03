import React, { useState } from 'react';
import Modal from '../modal';
import Button from '../form/button/index';

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
      <Button onClick={handleOpen} title="Open Modal" disabled={open} />
      <Modal open={open} title="Modal Example" onClose={handleClose} />
    </>
  );
};

export default ModalExample;
