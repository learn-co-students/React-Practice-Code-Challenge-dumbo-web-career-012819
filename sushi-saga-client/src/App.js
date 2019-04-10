import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

let eatenSushi = []

// Endpoint!
const API = "http://localhost:3000/sushis"
let i = 0

class App extends Component {

  state = {
  	allSushi: [],
  	displayedSushi: [],
  	eatenSushi: [],
  	customerMoney: 100
  }

  componentDidMount() {
  	fetch(API)
  	.then(resp => resp.json())
  	.then(allSushis => {
  	  this.setState({
  	  	allSushi: allSushis
  	  })
  	})
  	.then(() => this.narrowDownSushi())
  }

  narrowDownSushi = () => {
  	eatenSushi = []
  	this.setState({
  	  displayedSushi: this.state.allSushi.slice(i, i + 4)
  	}) 
  	i += 4
  	if (i === 100) {
  		i = 0
  	}
  }

  eatenSushiArray = (eaten) => {
  	eatenSushi.push(eaten)
  	this.setState({
  		eatenSushi: [...this.state.eatenSushi, eatenSushi]
  	})
  }

  reduceMoney = (sushiPrice) => {

  	if (this.state.customerMoney - sushiPrice >= 0) {
	  	this.setState({
	  		customerMoney: this.state.customerMoney - sushiPrice
	  	})
	 }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer customerMoney={this.state.customerMoney} reduceMoney={this.reduceMoney} eatenSushi={eatenSushi} eatenSushiArray={this.eatenSushiArray} displayedSushi={this.state.displayedSushi} narrowDownSushi={this.narrowDownSushi} />
        <Table customerMoney={this.state.customerMoney} eatenSushi={this.state.eatenSushi} />
      </div>
    );
  }
}

export default App;