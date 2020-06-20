import React from 'react';
import ReactDOM from 'react-dom';
import ModalExample from './examples/ModalExample';
import SelectExample from './examples/SelectExample';
import SelectorExample from './examples/SelectorExample';

const App = () => (
  <>
    <h2 style={{ textAlign: 'center' }}>Welcome to React UI Components</h2>
    <ModalExample />
    <SelectExample />
    <SelectorExample />
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));
