import React from 'react'

export default function Variables() {
    const title = <h1>03 - Variables</h1>
    const name = 'Fatih';
    const birthYear = 1993
    const howOldAreYou = () => 2022 - birthYear
    const description = <div>I learn ReactJS</div>
    const style = {
        display:'grid',
        placeItems:'center',
        border:'1px solid red'
    }
    return (
        <>
            <div style={style}>
                {title}
                <div>Name : {name}</div>
                <div>Age : {howOldAreYou()}</div>
                {description}
            </div>
        </>
    )
}
