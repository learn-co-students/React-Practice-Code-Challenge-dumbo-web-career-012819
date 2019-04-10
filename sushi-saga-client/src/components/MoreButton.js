import React from 'react'

const MoreButton = (props) => {
    return <button onClick={() => props.narrowDownSushi(props.eatenSushi)}>
            More sushi!
          </button>
}

export default MoreButton