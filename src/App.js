import './App.css';
import {useEffect, useState} from 'react';
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
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setData(data))
  }, []);
return (
    <>
    {data.map(user => (
      <div key={user.id}>
        <h1>{user.name}</h1>
        <p>{user.email}</p>
      </div>))}
    </>
  );
}

export default App;
