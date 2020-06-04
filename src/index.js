import React from 'react';
import ReactDOM from 'react-dom';
import ModalExample from './examples/ModalExample';
import SelectExample from './examples/SelectExample';
import SummaryExample from './examples/SummaryExample';

const App = () => (
  <>
    <h2 style={{ textAlign: 'center' }}>Welcome to Efficient UI</h2>
    <div style={{ maxWidth: 200 }}>
      <ModalExample />
      <SelectExample />
      <SummaryExample />
    </div>
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));
