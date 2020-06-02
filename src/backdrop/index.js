import React from 'react';
import './backdrop.scss';

const Backdrop = ({ onClick, open }) => <button className={`backdrop fade ${open ? 'open' : ''}`} onClick={onClick} />;

export default Backdrop;
