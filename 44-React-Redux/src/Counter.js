import React, { Component } from "react";
import "./index.css";
import "./App.css";

import {connect} from 'react-redux'



class Counter extends Component {

    // componentWillMount(){
    //   store.subscribe(() => 
    //     this.setState({})
    //     )
    // }
  
    // increment = (amount) => {
    //     this.props.dispatch({type: 'INCREMENT', amount}) //amount: amount
        
    // }
  
    // decrement = (amount) => {
    //     this.props.dispatch({type: 'DECREMENT', amount})
    // }
  
    render() {
    // debugger

    console.log(this.props)
  
      return (
        <div className="Counter">
          <h1>{this.props.count}</h1>
          <button onClick={() => this.props.decrement(1)}> - </button>
          <button onClick={() => this.props.increment(1)}> + </button>
          <button onClick={() => this.props.increment(2)}> +2 </button>
          <button onClick={() => this.props.increment(5)}> +5 </button>
  
        </div>
      );
    }
  }

  const mapStateToProps = (state) => {
    console.log("WhatIsThis:", state)
    return{
      name: 'Corgi',
      count: state.count
    }
  }

  const mapDispatchToState = (dispatch) => {
    // console.log("WhatIsThis:", whatIsThis)

    return{
      increment: (amount) => dispatch({type: 'INCREMENT', amount}),
      decrement: (amount) => dispatch({type: 'DECREMENT', amount})
    }

  }

  const increment = (amount) => {
    type: 'INCREMENT', amount
  }

  const objForDispatch = {
    // increment, decrement
    increment: (amount) => ({type: 'INCREMENT', amount}),
    decrement: (amount) => ({type: 'DECREMENT', amount})
  }
  

  export default connect(mapStateToProps, objForDispatch)(Counter)