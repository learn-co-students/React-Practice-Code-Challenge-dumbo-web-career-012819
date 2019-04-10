import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

    state = {
        sushis: [],
        eaten: []
    }


    componentDidMount() {
        fetch(API).then(resp => resp.json())
        .then(data => {
            this.setState({
                sushis: data
            })
        })
    }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis}   />
        <Table eaten={this.state.eaten} />
      </div>
    );
  }
}

export default App;
