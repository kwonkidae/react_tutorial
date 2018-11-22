import React from 'react';

function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}</h2>
}

function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }
  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  )
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    console.log('componentDidMount');
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    console.log('componentWillUnmount');
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <FormattedDate date={this.state.date}></FormattedDate>
        <ActionLink />
      </div>
    )
  }
}

export default Clock;
