import React from 'react';
import ReactDOM from 'react-dom';
import ModalExample from './examples/ModalExample';
import SelectExample from './examples/SelectExample';

const App = () => (
  <>
    <h2 style={{ textAlign: 'center' }}>Welcome to Efficient UI</h2>
    <ModalExample />
    <SelectExample />
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));
