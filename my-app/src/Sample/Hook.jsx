import React, { useState } from 'react'

export default function Hook() {
    const [person, setPerson] = useState({
        name: '',
        age: 33
    })

    const [rate, setRate] = useState(['👌'])

    const onChangeName = (e) => {
        setPerson((prevState) => ({
            ...prevState,
            name: e.target.value
        }))
    }

    const onChangAge = (e) => {
        setPerson((prevState) => ({
            ...prevState,
            age: e.target.value
        }))
    }

    const setPersonRate = (e) => {
        setRate((prevState) => [...prevState, '👌'])
    }

    return (
        <div>
            <div>
                Fname: <input onChange={onChangeName}></input>
                Age: <input type="number" onChange={onChangAge}></input>
            </div>
            <div>
                Rate: {rate.map(item => item)}
                <button onClick={setPersonRate}>Up Rate</button>
            </div>
            <div>
                {JSON.stringify(person)}
            </div>
        </div>
    )
}