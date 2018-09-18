import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Game/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}


class Game extends Component {
  constructor(props){
    super(props);
    this.state = {
      pictures: ["angelica", "andres", "saori", "nico", "angelica", "andres", "saori", "nico"],
      show: [true, false, false, false, false, false, false, false],
    }
  }

    voltearCarta(index){
      var showIt = this.state.show.slice();
      showIt[index] = !showIt[index];
      this.setState({
        show : showIt,
      })
    }

    pictures(index){
      return this.state.show[index] ? this.state.pictures[index] : "back";
    }

  render(){
    return(
      <div classname = 'Game'>
        <Mosaico onClick = {() => this.voltearCarta(0)} path = {this.pictures(0) + ".jpeg"}/>
    
      </div>
    )
  }
}

class Mosaico extends Component {

  render (){
    return (
      <div> <img className = "Mosaico" height="200" path={this.props.path} onClick = {this.props.onClick}/> </div>
    )
  }
}

export default App;
