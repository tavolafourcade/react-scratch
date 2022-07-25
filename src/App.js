import './App.css';
import {useEffect, useState} from 'react';
import Card from './Components/Card';
import Buttons from './Components/Buttons';

import { useCatContext } from './context/CatsContext';

function App() {
  const [catHistory, setCatHistory] = useState([]);

  const {
    data, getData, setData
  } = useCatContext()


  const addHistory = () => {
    setCatHistory(prevState => [...prevState, ...data])

  }

  const getPreviousCat = () => {
    console.log('cathistorylength', catHistory.length)
    console.log('CAThistory', catHistory)
    const previousCat = catHistory[catHistory.length - 1]
    setData([previousCat])
    console.log('previousCat', previousCat)
    return previousCat
  }


  useEffect(() => {
    console.log('cathistory', catHistory)
    localStorage.setItem("catHistory", catHistory);
  }, [catHistory])

  useEffect(() => {
    getData()
  },[])

return (
  <>
    {data.map(item => (
      <Card {...item} key={item.id}/>))}
    <Buttons addHistory={addHistory} getPreviousCat={getPreviousCat}/>
  </>
  );
}

export default App;
