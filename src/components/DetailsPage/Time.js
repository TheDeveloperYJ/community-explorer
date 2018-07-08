import React from 'react'
import PropTypes from 'prop-types'

const Time = ({time,name}) => {
    return (
        <div style={{fontSize:'1.2em',fontWeight:'light'}}>
      {name ? <p>By {name}</p> : null} 
      <p> @{time}</p> 
        </div>

    )
}

Time.propTypes = {
    time:PropTypes.string.isRequired,
    name:PropTypes.string
}

export default Time;