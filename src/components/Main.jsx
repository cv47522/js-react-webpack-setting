import Component from 'components/Component.jsx';
import React from 'react';

import './Main.css';

export default class Main extends React.Component {
  static initCount = 5;

  constructor(props) {
    super(props); // initialize properties
    this.state = {
      count: Main.initCount,
    };
    this.countdownId = null;
    this.handleReset = this.handleReset.bind(this);
  }

  render() {
    return (
        <div className='main'>
            <h1>Hello React</h1>
            <Component count={this.state.count} onReset={this.handleReset}/>
        </div>
    );
  }

  tick() {
    if (this.state.count > 0) {
      /*
       * State updates may be asynchronous, so if we are calculating new
       * state value based on the previous one, we should use the callback.
       */

      // update state by triggering render() to re-render "count" variable every 1000ms
      // this obj is merged to this.state in constructor()
      this.setState((prevState, props) => ({
        count: prevState.count - 1,  // overwrite the "count" property defined in the constructor()
      }));
    } else {
      clearInterval(this.countdownId);
    }
  }

  // lifecycle Method, callback function, do things after redering and displaying the page(DOM tree)
  componentDidMount() {
    this.countdownId = setInterval(() => this.tick(), 1000);
  }

  // lifecycle Method, do things before leaving the page or remoing Counter component
  componentWillUnmount() {
    clearInterval(this.countdownId);
  }

  handleReset() {
    clearInterval(this.countdownId);
    this.setState({
      count: Main.initCount,
    }, () => { // called back after the state has been set
      this.countdownId = setInterval(() => this.tick(), 1000);
    });
  }
}
