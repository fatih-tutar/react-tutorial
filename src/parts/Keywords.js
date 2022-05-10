import React from 'react'

export default function Keywords() {
  return (
    <>
        <h1> - - - HTML and JSX Keywords Differences - - - </h1>
        <input type="checkbox" defaultChecked/>
        <br/>
        <span className='name'>Fatih</span>
        <br/>
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name"></input>
        </div>
        <br/>
        <div style={{fontSize:"50px", color:"red"}}>React Tutorial</div>
        <br/>
        <input type="text" defaultValue={"50"}/>
    </>
  )
}
