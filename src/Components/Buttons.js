import React from 'react'
import { useCatContext } from '../context/CatsContext'

const Buttons = ({addHistory, getPreviousCat}) => {

  const {
    getData,
    data,
    setHistory,
  } = useCatContext()

  const handleNextClick = (e) => {
    e.preventDefault()
    setHistory(data)
    addHistory()
    getData()
  }

  const handlePreviousClick = () => {
    getPreviousCat()
  }
  return (
    <div>
      <button onClick={handlePreviousClick}>Previous</button>
      <button onClick={handleNextClick}>Next</button>
    </div>
  )
}

export default Buttons