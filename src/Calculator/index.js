import React from 'react';
import Display from './Display';
import Button from './Button';
import autoBind from 'react-autobind';

class Calculator extends React.Component {
  constructor(props) {
     super(props);
     autoBind(this);

     this.state = {
        calc: '',
        history: []
     };
  }

  buttonClick(e) {
    const calc = this.state.calc + e.target.innerText;
    this.setState({ calc });
  }

  submitCalc() {
    const result = eval(this.state.calc);
    let calc = `${this.state.calc} = ${result}`;
    this.state.history.push(calc);
    calc = result;
    this.setState({ calc });
  }

  clear() {
    this.setState({ calc: '' });
  }

  render() {
    return (
      <div id="calculator">
        <Display value={this.state.calc} disabled="disabled" />
        <div className="calculator-buttons">
          <Button onClick={this.buttonClick}>7</Button>
          <Button onClick={this.buttonClick}>8</Button>
          <Button onClick={this.buttonClick}>9</Button>
          <div className="clearfix"></div>

          <Button onClick={this.buttonClick}>4</Button>
          <Button onClick={this.buttonClick}>5</Button>
          <Button onClick={this.buttonClick}>6</Button>
          <div className="clearfix"></div>

          <Button onClick={this.buttonClick}>1</Button>
          <Button onClick={this.buttonClick}>2</Button>
          <Button onClick={this.buttonClick}>3</Button>
          <div className="clearfix"></div>

          <Button onClick={this.buttonClick}>0</Button>
        </div>

        <div className="calculator-action-buttons">
          <Button onClick={this.buttonClick}>+</Button>
          <Button onClick={this.buttonClick}>-</Button>
          <div className="clearfix"></div>

          <Button onClick={this.buttonClick}>*</Button>
          <Button onClick={this.buttonClick}>/</Button>
          <div className="clearfix"></div>

          <Button onClick={this.submitCalc}>=</Button>
          <Button onClick={this.clear}>CR</Button>
          <div className="clearfix"></div>
        </div>
        <div className="clearfix"></div>
     </div>
   );
  }
}

export default Calculator;
