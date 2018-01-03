const React = require('react');

class Circle extends React.Component {

<<<<<<< HEAD
  shouldComponentUpdate(nextProps, nextState) {
    return (this.props.color !== nextProps.color);
=======
  shouldComponentUpdate(nextProps) {
    return Boolean(nextProps.color !== this.props.color);
>>>>>>> d08882495ec1e80a33a7a4a4f431e7852425a023
  }

  render() {
    const { color } = this.props;
<<<<<<< HEAD
    console.log(`A ${color} circle was rendered!`);
=======

>>>>>>> d08882495ec1e80a33a7a4a4f431e7852425a023
    return (
      <div className={`circle ${color}`}></div>
    )
  }
}

module.exports = Circle;
