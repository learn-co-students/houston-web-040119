import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import logo from "./logo.svg";
import "./App.css";

import {createStore} from 'redux'

let reducer = (state = {count: 0},action) => {

  console.log("current state:", state)
  console.log("action:", action)
  console.log('--------------')

  // if(action.type === 'toggle'){
  //   return{
  //     test: !state.test
  //   }
  // }

  switch(action.type){
    case 'INCREMENT':
      return{
        count: state.count + action.amount
      }
    case 'DECREMENT':
      return{
        count: state.count - action.amount                                                                                                                                                                                                                                                                                                            
      } 
    default: 
      return{
        count: state.count
      }
  }

  // return{
  //   count: state.count
  // }

}

const store = createStore(reducer)

store.subscribe(() => {
console.log("New state:", store.getState())
console.log('--------------')

})

// debugger


class App extends Component {
  state = { count: 0 };

  increment = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  decrement = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  };

  render() {
    return (
      <div className="App">
        <Header count={this.state.count} />
        <Counter
          count={this.state.count}
          increment={this.increment}
          decrement={this.decrement}
        />
      </div>
    );
  }
}

class Header extends Component {
  renderDescription = () => {
    const remainder = this.props.count % 5;
    const upToNext = 5 - remainder;
    return `The current count is less than ${this.props.count + upToNext}`;
  };

  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <h3>{this.renderDescription()}</h3>
      </header>
    );
  }
}

class Counter extends Component {

  componentWillMount(){
    store.subscribe(() => 
      this.setState({})
      )
  }

  increment = (amount) => {
      store.dispatch({type: 'INCREMENT', amount}) //amount: amount
      
  }

  decrement = (amount) => {
      store.dispatch({type: 'DECREMENT', amount})
  }

  render() {
  // debugger

    return (
      <div className="Counter">
        <h1>{store.getState().count}</h1>
        <button onClick={() => this.decrement(1)}> - </button>
        <button onClick={() => this.increment(1)}> + </button>
        <button onClick={() => this.increment(2)}> +2 </button>
        <button onClick={() => this.increment(5)}> +5 </button>

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
