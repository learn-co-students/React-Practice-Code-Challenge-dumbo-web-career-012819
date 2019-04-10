import React, { Fragment } from 'react'

class Sushi extends React.Component {

    state = {
        clicked: false
    }

    handleClick = () => {
        console.log('yo clicked in sushi')
        this.setState({
            clicked: !this.state.clicked
        })
    }

    render() {
        return (
          <div className="sushi">
            <div className="plate"
                 onClick={this.handleClick}>
              {this.state.clicked ? null : <img src={this.props.sushi.img_url} width="100%" alt={this.props.sushi.name} /> }
            </div>
            <h4 className="sushi-details">
              {this.props.sushi.name} - ${this.props.sushi.price}
            </h4>
          </div>
        )
    }

}

export default Sushi
