import React from 'react'

export default function Child(props) {
    const handler = () => {
        props.handler('child-data')
    }
    
    return (
        <div onClick={handler}>Child</div>
    )
}
