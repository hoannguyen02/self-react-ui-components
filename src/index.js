import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import ModalExample from './examples/ModalExample';
import SelectExample from './examples/SelectExample';
import SelectorExample from './examples/SelectorExample';
import SummaryExample from './examples/SummaryExample';
import MarketPriceExample from './examples/MarketPriceExample';
import ButtonWithSVGExample from './examples/ButtonWithSVGExample';
import InputExample from './examples/InputExample';
import AccordionExample from './examples/AccordionExample';

const App = () => (
  <>
    <h2 style={{ textAlign: 'center' }}>Welcome to Efficient UI</h2>
    <AccordionExample />
    <div style={{ maxWidth: 200 }}>
      <InputExample />
      <ButtonWithSVGExample />
      <ModalExample />
      <SelectExample />
      <SelectorExample />
      <SummaryExample />
    </div>
    <div style={{ maxWidth: 500 }}>
      <MarketPriceExample />
    </div>
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));
