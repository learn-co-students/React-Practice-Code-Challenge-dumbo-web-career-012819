import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {

  state = {
    i: 0,
    length: this.props.sushiList.length
  }

  generateSushiComponents = () => {
    let list = this.props.sushiList.map(sushi => <Sushi key={sushi.id} data={sushi} handleEatSushi={this.props.handleEatSushi}/>)
    if(this.state.i > 96) {
      this.setState({ i: 0 })
    }
    return list.slice(this.state.i, this.state.i+4)
  }

  handleMoreSushis = () => {
    this.setState({ i: this.state.i+4 })
  }

  render(){
    return (
      <Fragment>
      <div className="belt">
      {
        this.generateSushiComponents()
      }
      <MoreButton handleMoreSushis={this.handleMoreSushis}/>
      </div>
      </Fragment>
    )
  }
}

export default SushiContainer
