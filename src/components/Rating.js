<<<<<<< HEAD
const React = require('react');

class Rating extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      increasing: false,
      decreasing: false
    };
  }

  componentWillReceiveProps(nextProps) {
      if (nextProps.rating === this.props.rating) {
        this.setState({
          increasing: false,
          decreasing: false
        })
      } else if (nextProps.rating > this.props.rating) {
        this.setState({
          increasing: true,
          decreasing: false
        })
      } else if (nextProps.rating < this.props.rating) {
        this.setState({
          increasing: false,
          decreasing: true
        })
      }
    }

  render() {
    let trend = 'stable';
    if (this.state.increasing) {
      trend = 'increasing';
    } else if (this.state.decreasing) {
      trend = 'decreasing';
    }

    return (
      <div>
        <p>Rating: {this.props.rating}</p>
        <p>Trend: {trend}</p>
      </div>
    )
  }
}

module.exports = Rating;
=======
import React from 'react';

class Rating extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      increasing: false,
      decreasing: false
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      increasing: this.props.rating < nextProps.rating,
      decreasing: this.props.rating > nextProps.rating
    });
  }

  render() {
    let trend = 'stable';
    if (this.state.increasing) {
      trend = 'increasing';
    } else if (this.state.decreasing) {
      trend = 'decreasing';
    }

    return (
      <div>
        <p>Rating: {this.props.rating}</p>
        <p>Trend: {trend}</p>
      </div>
    )
  }
}

export default Rating;
>>>>>>> d08882495ec1e80a33a7a4a4f431e7852425a023
