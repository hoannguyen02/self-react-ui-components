import React, { useState } from 'react';
import Modal from '../modal';
import Button from '../form/button/index';
import CircularProgress from '../circular-progress/index';

const ModalExample = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const toggleLoading = () => {
    setLoading(!loading);
  };

  return (
    <>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <Button onClick={handleOpen} title="Open Modal" disabled={open} />
        {loading && <CircularProgress />}
      </div>
      <Button className="primary" onClick={toggleLoading} title="Toggle loading" />
      <Modal open={open} title="Modal Example" onClose={handleClose} />
    </>
  );
};

export default ModalExample;
