import React, { useContext } from 'react'
import { TheamContext } from '../Context/Theam'

export default function B() {
  const theam = useContext(TheamContext)
  return (
    <div>B: {theam} </div>
  )
}