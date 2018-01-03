<<<<<<< HEAD
const React = require('react');
const Circle = require('./Circle');

class Circles extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      circles: [
        { color: 'red' },
        { color: 'yellow' },
        { color: 'green' },
      ]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const newCircles = this.state.circles.map(circle => {
      if (circle.color === 'red') return { color: 'green' };
      if (circle.color === 'green') return { color: 'red' };
      return circle;
    });
    console.log("\n💥 Red and green were swapped!");
    this.setState({ circles: newCircles });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Swap red and green</button>
        { this.state.circles.map((circle, index) => <Circle color={circle.color} key={index} /> ) }
      </div>
    );
  }
}

module.exports = Circles;
=======
import React from 'react';
import Circle from './Circle';

class Circles extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      circles: [
        { color: 'red' },
        { color: 'yellow' },
        { color: 'green' },
      ]
    };
  }

  handleClick = () => {
    const newCircles = this.state.circles.map(circle => {
      if (circle.color === 'red') return { color: 'green' };
      if (circle.color === 'green') return { color: 'red' };
      return circle;
    });
    console.log("\n💥 Red and green were swapped!");
    this.setState({ circles: newCircles });
  }

  render() {
    const renderCircles = this.state.circles.map((circle, index) => 
      <Circle color={circle.color} key={index} /> 
    );

    return (
      <div>
        <button onClick={this.handleClick}>Swap red and green</button>
        {renderCircles}
      </div>
    );
  }
}

export default Circles;
>>>>>>> d08882495ec1e80a33a7a4a4f431e7852425a023
