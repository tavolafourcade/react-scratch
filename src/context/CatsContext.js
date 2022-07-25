import React, {
  createContext, useState, useContext, useCallback,
} from 'react'
import {getRequest} from '../api/data'

const Context = createContext()

//selector to avoid to call the context in every component
export const useCatContext = () => {
  const context = useContext(Context)
  console.log('context', context)
  return context
}

function CatsProvider({children}){
  const [data, setData] = useState([])
  const [history, setHistory] = useState([])
  console.log('history', history)
  const getData = useCallback(async () => {
    const res = await getRequest()
    setData(res)
    }, [])
    
  return (
    <Context.Provider value={{data, getData, setHistory, setData}}>{children}</Context.Provider>
  )
}

export default CatsProvider
