import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  c = "Asvad"
  render() {
    return (
      <div>This is class based component {this.c}. Let's see how much time will it take to learn this.</div>
    )
  }
}