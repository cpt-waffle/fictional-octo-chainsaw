import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

//....
//....//....//....//....
//....//....
//....//....//....
//....//....
//....
//....//....//....//....
//....//....//....
function App() {
  const [numbers, setNumbers] = useState([]);
  useEffect(() => {
    axios.get('/numbers').then(res => {
      setNumbers(res.data);
    })
  }, [])

  return (
    <div className="App">
      <h1>Numbers :)</h1>
      <h1>hello world</h1>
      {numbers.map(number => <li key={number}>{number}</li>)}
    </div>
  );
}

export default App;
