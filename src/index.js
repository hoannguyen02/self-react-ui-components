import React from 'react';
import ReactDOM from 'react-dom';
import ModalExample from './examples/ModalExample';

const App = () => (
  <>
    <h2 style={{ textAlign: 'center' }}>Welcome to React UI Components</h2>
    <ModalExample />
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));
