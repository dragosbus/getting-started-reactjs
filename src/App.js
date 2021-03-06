import React, { Component } from 'react';
import './App.css';
import FaStar from 'react-icons/lib/fa/star';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Game/>
      </div>
    );
  }
}

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedNumbers: [],
      numberOfStars: Math.floor(Math.random() * 9) + 1,
      isCorrect: null
    };
    this.selectedNumber = this.selectedNumber.bind(this);
    this.unselectNumber = this.unselectNumber.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  selectedNumber(clickedNumber) {
    if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0) return;

    this.setState(prevState => ({
      selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
    }));
  }

  unselectNumber(clickedNumber) {
    this.setState(prevState => ({
      selectedNumbers: prevState.selectedNumbers.filter(number=> number !== clickedNumber)
    }));
  }

  checkAnswer() {
    this.setState(prevState => ({
      isCorrect:prevState.numberOfStars === prevState.selectedNumbers.reduce((acc, n)=>acc+n,0)
    }));
  }

  render() {
    return (
      <div className="game">
        <h3>Play Nine</h3>
        <br/>
        <div className="row">
          <Stars numberOfStars={this.state.numberOfStars}/>
          <Button selectedNumber={this.state.selectedNumbers} checkAnswer={this.checkAnswer} isCorrect={this.state.isCorrect}/>
          <Answer selectedNumbers={this.state.selectedNumbers} unselectNumber={this.unselectNumber}/>
        </div>
        <Numbers selectedNumbers={this.state.selectedNumbers} selectNumber={this.selectedNumber} />
      </div>
    );
  }
}

const Stars = props => {
  const stars = [];
  for (let i = 0; i < props.numberOfStars; i++) {
    stars.push(<FaStar key={i}/>);
  }
  return (
    <div className="stars">
      {stars}
    </div>
  );
};

const Button = props => {
  return (
    <button className={props.isCorrect ? "correct" : "incorrect"} disabled={props.selectedNumber.length === 0} onClick={props.checkAnswer}>=</button>
  );
};

const Answer = props => {
  return (
    <div className="answer">
      {props.selectedNumbers.map((number, i) => {
        return (
          <span onClick={()=>props.unselectNumber(number)} key={i}>{number}</span>
        );
      })}
    </div>
  );
};

const Numbers = props => {
  const arrOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const numberClassName = number => {
    if (props.selectedNumbers.indexOf(number) >= 0) {
      return 'selected';
    }
  };

  return (
    <div className="numbers">
      {arrOfNumbers.map((n, i) => <span className={numberClassName(n)} key={i} onClick={()=> props.selectNumber(n)}>{n}</span>)}
    </div>
  );
};



export default App;
