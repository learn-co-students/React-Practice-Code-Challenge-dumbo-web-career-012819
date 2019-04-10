import React, { Component } from 'react'

class Sushi extends Component {

  state = {
    eaten: false
  }

  handleEaten = () => {
    if(this.props.customerMoney - this.props.sushi.price >= 0 ) {
      this.setState({
        eaten: true
      }, () => this.props.eatenSushiArray(this.state.eaten))

      this.props.reduceMoney(this.props.sushi.price)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.sushi.id !== nextProps.sushi.id) {
      this.setState({
        eaten: false
      })
    }
  }

  render() {
    return (
      <div className="sushi">
        <div className="plate" 
             onClick={this.handleEaten}>
          { this.state.eaten ? null : <img src={this.props.sushi.img_url} width="100%" /> }
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    )
  }
}

export default Sushi