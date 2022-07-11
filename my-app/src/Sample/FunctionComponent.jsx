import React, { useEffect, useState } from 'react'

/**
 * 
 * see how we can combine componentDidMount/componentDidUpdate
 * with just a useeffect
 * 
 */
export default function FunctionComponent() {
    const [state, setCount] = useState({ count: 0 })

    useEffect(() => {
        document.title = `${state.count}`
    }, [state.count])

    const handleIncrement = () => {
        setCount({ count: state.count + 1 })
    }

    const handleDecrement = () => {
        setCount({ count: state.count - 1 })
    }

    return (
        <>
            Count: {state.count}
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </>

    )
}