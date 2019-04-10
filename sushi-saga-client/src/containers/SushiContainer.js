import React, { Fragment } from 'react'
import Sushi from '../components/Sushi'
import MoreButton from '../components/MoreButton'

const SushiContainer = (props) => {

  // const filterSushi = props.sushiList.filter((sushi, i) => i < props.index)
  const firstFour = props.sushiList.slice(props.index.start, props.index.end)

  return (
    <Fragment>
      <div className="belt">
        {
          firstFour.map(sushi => <Sushi key={sushi.id} sushi={sushi} money={props.money} handleSushiClick={props.handleSushiClick}/>)
        }
        <MoreButton handleIndexClick={props.handleIndexClick}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
