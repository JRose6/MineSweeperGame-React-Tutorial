import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Box.js'
import Box from './Box';

class Board extends React.Component{
  /*constructor(size){
    this.props.size = size;
    this.props.board = [];
      for (var i=0;i<size;i++){
        var row = [];
        for (var j=0;j<size;j++){
          row.push(Box);
        }
        this.props.board.push(row);
      }
  }*/
  render(){
    return(<div></div>);
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="row">
          <Box />
          <Box />
          <Box />
          <Box />
          </div>
          <div className="row">
          <Box />
          <Box />
          <Box />
          <Box />
          </div>
          <div className="row">
          <Box />
          <Box />
          <Box />
          <Box />
          </div>
          <div className="row">
          <Box />
          <Box />
          <Box />
          <Box />
          </div>
      </div>
    );
  }
}


export default App;
