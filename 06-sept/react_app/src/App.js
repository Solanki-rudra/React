import React,{useState} from 'react'
// import Form from './Form';
// import Conditional from './components/Conditional.js';
// import Mybuttons from './components/Mybuttons';
// import TeaSet from './components/Try.js';
import './App.css'
// import Event from './Events.js'
// import EventHandling from './components/EventHandling'
import AllEvents from './components/AllEvents'
import DataFetch from './components/PractiseHooks'

////07-sept
import Practice from './07-sept/useStack'

////11-sept
import Todo from './11-sept/Todo'
import Parent from './11-sept/Parent' 
import Que from './11-sept/Que'
import Medicine from './11-sept/MedicineCrud/Medicine'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0);
  // const getData =(name)=>{
  //   console.log(typeof name)
  //   console.log(name)
  //   alert('Hi', name)
  // }
  return (
      <header className="App-header">
        {/* <Form onSubmit={getData} />
        <h1>hello</h1>
        <Conditional /> */}
        {/* <div className='row'>
          <div className='col'>
          <Mybuttons />
          </div>
        </div> */}
        {/* <TeaSet/> */}
        {/* <Event /> */}
        {/* <EventHandling /> */}
        {/* <AllEvents />  */}
        {/* <DataFetch /> */}
        {/* <Practice /> */}
        {/* <Todo /> */}
        {/* <Parent /> */}
        {/* <Que name='Rudra' rollNum = {16} age = {18}/> */}
        <Medicine />
      </header>
  );
}
export default App;
