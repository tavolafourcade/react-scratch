import './App.css';
import {useEffect, useState} from 'react';
import Card from './Card';
import Buttons from './Buttons';
import axios from 'axios';
//Get data from the server
// console.log(fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json()
// .then(data => console.log(data))))

//Post data to the server
// console.log(fetch('https://jsonplaceholder.typicode.com/users', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     name: 'John Doe',
//   })
// })
// .then(res => {
//   return res.json()
//   })
// .then(data => console.log(data))
// )


function App() {
  const [data, setData] = useState([]);
  const API_URL = `https://api.thecatapi.com/v1/images/search`;
  const API_KEY = 'ce431d92-c6b4-4f93-80dc-1af3e40bc290'
  const history = []

  useEffect(() => {
    axios.get(API_URL,
      {headers: {
        'x-api-key': API_KEY
      }})
    .then(res => { 
      const data = res.data
      setData(data)
    })
  }, []);

  history.push(data)
  console.log('history', history)
return (
    <>
    {data.map(item => (
      <Card img={item} key={item.id}/>))}
    <Buttons />
    </>
  );
}

export default App;
