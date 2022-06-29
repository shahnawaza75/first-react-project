import React from 'react';

class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="calculator-div">
        <input className="displayNum" type="text" id="result" placeholder="0" disabled />
        <div className="calculatorButtons">
          <button className="color-f" type="submit">AC</button>
          <button className="color-f" type="submit">+/-</button>
          <button className="color-f" type="submit">%</button>
          <button className="color-f orange" type="submit">/</button>
          <button className="color-s" type="submit">7</button>
          <button className="color-s" type="submit">8</button>
          <button className="color-s" type="submit">9</button>
          <button className="color-f orange" type="submit">*</button>
          <button className="color-s" type="submit">4</button>
          <button className="color-s" type="submit">5</button>
          <button className="color-s" type="submit">6</button>
          <button className="color-f orange" type="submit">-</button>
          <button className="color-s" type="submit">1</button>
          <button className="color-s" type="submit">2</button>
          <button className="color-s" type="submit">3</button>
          <button className="color-f orange" type="submit">+</button>
          <button className="color-s zero" type="submit">0</button>
          <button className="color-s" type="submit">.</button>
          <button className="color-f orange" type="submit">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
