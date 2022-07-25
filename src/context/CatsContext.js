import React, {
  createContext, useState, useContext, useEffect,
} from 'react'
import {getRequest} from '../api/data'

const Context = createContext()

export const useCatContext = () => {
  const context = useContext(Context)
  return context
}

function CatsProvider({children}){
  const [data, setData] = useState([])

  const getData = async () => {
  const res = await getRequest()
  setData(res.data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <Context.Provider value={{data}}>{children}</Context.Provider>
  )
}

export default CatsProvider
