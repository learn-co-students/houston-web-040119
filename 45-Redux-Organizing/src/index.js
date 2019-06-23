import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import logo from "./logo.svg";
import "./App.css";
import App from './App'


import {createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'


const store = createStore(rootReducer, applyMiddleware(thunk))
// console.log(thunk)

store.subscribe(() => {
console.log("New state:", store.getState())
console.log('--------------')

})



ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>
, document.getElementById("root"));
