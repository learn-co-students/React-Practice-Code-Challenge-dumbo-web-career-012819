import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushiList: [],
    budget: 50,
    plate: []

  }

  componentDidMount() {
    fetch(API)
    .then(r => r.json())
    .then(list => {
      list = list.map(sushi => {
         return {...sushi, eaten: false}
       })
       this.setState({ sushiList: list })
     })
  }

  handleEatSushi = (sushi) => {
    if(this.state.budget >= sushi.price ) {
      let plate = [...this.state.plate]
      plate.push(sushi)
      console.log(plate)
      let updatedSushi = {...sushi, eaten: true}
      let updatedList = this.state.sushiList.map(sushi => {
        return sushi.id === updatedSushi.id ? updatedSushi : {...sushi}
      })

      this.setState({ sushiList: updatedList, budget: this.state.budget-sushi.price, plate: plate}, () => console.log(this.state.sushiList))
    }
  }

  addMoreMoney = (event) => {
    event.preventDefault()
    let amount = event.target.amount.value + this.state.budget
    this.setState({ budget: amount })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushiList={this.state.sushiList} handleEatSushi={this.handleEatSushi} />
        <Table plate={this.state.plate} budget={this.state.budget} addMoreMoney={this.addMoreMoney}/>
      </div>
    );
  }
}

export default App;
