import React from 'react';
import ReactDOM from 'react-dom';
import ModalExample from './examples/ModalExample';
import SelectExample from './examples/SelectExample';
import SummaryExample from './examples/SummaryExample';
import MarketPriceExample from './examples/MarketPriceExample';

const App = () => (
  <>
    <h2 style={{ textAlign: 'center' }}>Welcome to Efficient UI</h2>
    <div style={{ maxWidth: 200 }}>
      <ModalExample />
      <SelectExample />
      <SummaryExample />
    </div>
    <div style={{ maxWidth: 500 }}>
      <MarketPriceExample />
    </div>
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));
