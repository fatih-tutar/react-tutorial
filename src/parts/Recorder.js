import React, { useState, useEffect } from 'react'

export default function Recorder() {

  useEffect(() => {
    document.title = `Button ${count} times clicked`
  })
  
  const [count,setCount] = useState(0);
  return (
    <div>
        <p>Button {count} times clicked.</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}
