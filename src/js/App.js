import React, { Component } from 'react';
import Board from "./board/Board";

export default class App extends Component {
  render() {
    return (
      <div className="Game">
        <Board/>
      </div>
    );
  }
}