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
  render() {
    return (
      <div className="game">
        <h3>Play Nine</h3>
        <br/>
        <div className="row">
          <Stars />
          <Button />
          <Answer />
        </div>
        <Numbers />
      </div>
    );
  }
}

const Stars = props => {
  const nOfStars = Math.floor(Math.random() * 9) + 1;
  const stars = [];
  for (let i = 0; i < nOfStars; i++) {
    stars.push(<FaStar />);
  }
  return (
    <div className="stars">
      {stars}
    </div>
  );
};

const Button = props => {
  return (
    <div>
      <button>=</button>
    </div>
  );
};

const Answer = props => {
  return (
    <div className="answer">
      ...
    </div>
  );
};

const Numbers = props => {
  const arrOfNumbers = [1,2,3,4,5,6,7,8,9];
  return (
    <div className="numbers">
      {arrOfNumbers.map((n,i) => <span key={i}>{n}</span>)}
    </div>
  );
};



export default App;
