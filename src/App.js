import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(amount) {
    this.setState(prevState => {
      return {
        counter: prevState.counter + amount
      }
    });
    console.log(this.state.counter)
  }

  render() {
    return (
      <div className="app">
        <Button amount={1} callParent={this.clickHandler} />
        <Button amount={2} callParent={this.clickHandler} />
        <Result value={this.state.counter}/>
      </div>
    );
  }
}

class Button extends Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.props.callParent(this.props.amount)
  }

  render() {
    return (
      <button onClick={this.clickHandler}>{this.props.amount}</button>
    );
  }
}

const Result = props => <h3>{props.value}</h3>

export default App;
