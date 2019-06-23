import React, { Component } from "react";
import "./index.css";
import "./App.css";

import {connect} from 'react-redux'
import {increment, decrement, fetchBooks} from './actions/counterActions'



class Counter extends Component {

  componentDidMount(){

    this.props.fetchBooks()
    // fetch('https://www.googleapis.com/books/v1/volumes?q=subject:genre&maxResults=10')
    // .then(res => res.json())
    // .then(data => {
    //     this.props.fetchBooks(data.items)
    // })

  }


    render() {

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

  // const mapDispatchToState = (dispatch) => {
  //   // console.log("WhatIsThis:", whatIsThis)

  //   return{
  //     increment: (amount) => dispatch({type: 'INCREMENT', amount}),
  //     decrement: (amount) => dispatch({type: 'DECREMENT', amount})
  //   }

  // }

  // const increment = (amount) => {
  //   type: 'INCREMENT', amount
  // }

  const objForDispatch = {
    // // increment, decrement
    increment: increment,
    decrement: decrement, //decrement
    fetchBooks: fetchBooks
  }
  

  export default connect(mapStateToProps, objForDispatch)(Counter)