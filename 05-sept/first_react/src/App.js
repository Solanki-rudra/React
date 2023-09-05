import React, {useState,useEffect} from 'react';
import './App.css';
// import data from './components/childC'
import Value from

function App() {
  let [count, setCount] = useState(0);
  let [prc, setPrc] = useState(0);
  useEffect(() => {
    alert('Now price is ' + prc)
  },[prc])
  return (
    <div className="App">
      <h1>{'stock : ' + count}</h1>
      <button onClick={() => {setCount(count+=1)}}>Increase</button>
      <button onClick={() => {setCount(count-=1)}}>Dicrease</button>
      <h1>{'price : ' + prc}</h1>
      <button onClick={() => {setPrc(prc+=10)}}>Credit</button>
      <button onClick={() => {setPrc(prc-=10)}}>Debit</button>
    {/* <data /> */}
    </div>
  );
}
export default App;
