import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  const renderSushi = props.displayedSushi.map(sushi => {
    return <Sushi customerMoney={props.customerMoney} reduceMoney={props.reduceMoney} sushi={sushi} eatenSushiArray={props.eatenSushiArray}/>
  })
    

  return (
    <Fragment>
      <div className="belt">
        {renderSushi}
        <MoreButton eatenSushi={props.eatenSushi} narrowDownSushi={props.narrowDownSushi} />
      </div>
    </Fragment>
  )
}

export default SushiContainer