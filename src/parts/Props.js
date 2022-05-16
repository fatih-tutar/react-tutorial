import React from 'react'

function Props(weather) {
  return (
    <div>The weather is <span style={weather.style}>{weather.status}</span></div>
  )
}

Props.defaultProps = {
  status : "sunny",
  style : { backgroundColor : 'yellow', color : 'black' }
}

export default Props