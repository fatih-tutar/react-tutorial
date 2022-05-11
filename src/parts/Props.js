import React from 'react'

export default function Props(weather) {
  return (
    <div>The weather is <span style={weather.style}>{weather.status}</span></div>
  )
}
