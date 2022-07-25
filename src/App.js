import './App.css';
import {useEffect, useState} from 'react';
import CatsProvider from './context/CatsContext';
import Card from './Components/Card';
import Buttons from './Components/Buttons';

function App() {
  const [data, setData] = useState([]);
  const API_URL = `https://api.thecatapi.com/v1/images/search`
  const API_KEY = 'ce431d92-c6b4-4f93-80dc-1af3e40bc290'
  const history = []

  useEffect(() => {
    
  }, []);

  history.push(data)
  console.log('history', history)
return (
    <CatsProvider>
    {data.map(item => (
      <Card img={item} key={item.id}/>))}
    <Buttons />
    </CatsProvider>
  );
}

export default App;
