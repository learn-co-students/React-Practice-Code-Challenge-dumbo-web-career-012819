import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi.js'

export default class SushiContainer extends React.Component {
    state = {
        firstIndex: 0,
        secondIndex: 4
    }

    handleClick = () => {
        this.setState({
            firstIndex: this.state.firstIndex +4,
            secondIndex: this.state.secondIndex +4
        })
    }

     sushiData = () => {
         return this.props.sushis.slice(this.state.firstIndex, this.state.secondIndex).map(sushi => <Sushi key={sushi.id} sushi={sushi} />)
     }

    render() {
        return (
          <Fragment>
            <div className="belt">
              {
                this.sushiData()
              }
              <MoreButton handleClick={this.handleClick} />
            </div>
          </Fragment>
        )
    }
}
