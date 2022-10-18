import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.props.time,
    };
  }
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ time: this.state.time - 1 });
    }, 1000);
  }
  componentDidUpdate(prevProps, prevState) {
    // if (prevState.time === 1) {
    if (this.state.time === 0) {
      clearInterval(this.intervalId);
    }
  }
  componentWillUnmount() {
    console.log("Timer unmounted");
    clearInterval(this.intervalId);
  }
  render() {
    const { time } = this.state;
    console.log(time);
    return (
      <div className="container mt-4 text-center">
        {time > 0 ? <h1>Time:{time}</h1> : <h1>Timer Expired</h1>}
      </div>
    );
  }
}

export default Timer;
