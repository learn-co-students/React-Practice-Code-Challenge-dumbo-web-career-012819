import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushiList: [],
    sushiEaten: [],
    money: 100,
    index: {
      end: 4,
      start: 0
    }
  }

  handleIndexClick = () => {
    this.setState({
      index: {
        end: this.state.index.end + 4,
        start: this.state.index.start + 4
      }
    })
  }

  handleSushiClick = (sushi) => {
    if (this.state.money - sushi.price > -1) {
      this.setState(state => ({
        sushiEaten: [...state.sushiEaten, sushi],
        money: state.money - sushi.price
      }))
    }
  }

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(sushiJSON => this.setState({sushiList: sushiJSON}))
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushiList={this.state.sushiList}
          index={this.state.index}
          money={this.state.money}
          handleIndexClick={this.handleIndexClick}
          handleSushiClick={this.handleSushiClick}
          />
        <Table money={this.state.money} sushiEaten={this.state.sushiEaten}/>
      </div>
    );
  }
}

export default App;
