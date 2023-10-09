import React,{useState} from 'react'
// import Form from './Form';
// import Conditional from './components/Conditional.js';
// import Mybuttons from './components/Mybuttons';
// import TeaSet from './components/Try.js';
import './App.css'
// import Event from './Events.js'
// import EventHandling from './components/EventHandling'
// import AllEvents from './components/AllEvents'
// import DataFetch from './components/PractiseHooks'

////07-sept
// import Practice from './07-sept/useStack'

////11-sept and 12-sept
// import Todo from './11-sept/Todo'
// import Parent from './11-sept/Parent' 
// import Que from './11-sept/Que'
import Medicine from './11-sept/MedicineCrud/Medicine'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Form1 from './11-sept/MedicineCrud/Form1';

////13-sept
import Que2 from './13-sept/Que'
import MainCrud from './CrudApi/MainCrud';
import ReverseCounter from './components/ReverseCounter';
import Home from './Router/Home';
import Practice20sept from './components/Practice20sept';
import Contex from './components/Contex';

import MedicineIndex from './MedicineWithApi/MedicineIndex';

import HomeTask from './RoutingTask/HomeTask';

import UsememoPrac from './components/UsememoPrac';
import UseCallback from './components/UseCallback';
import UseReducer from './components/UseReducer';
import Formik from './Formik.js';
import Debouncing from './Debouncing';

// import ExamPrepCrud from './ExamPrepCrud/ExamPrepCrud';
import ExamPrepCrud from './ExamPrepCrud/ExamPrepCrud';
import HomePage from './Exam-9-oct/HomePage'

function App() {
  // const [count, setCount] = useState(0);
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
        {/* <Medicine />  */}
        {/* <Que2 name={{firstName : 'Rudra' , lastName:'Solanki'}} age={18} course = 'B.tech'/> */}
        {/* <Que2 /> */}
        {/* <MainCrud /> */}
        {/* <ReverseCounter /> */}
        {/* <Practice20sept /> */}
        {/* <Home /> */}
        {/* <MedicineIndex /> */}
        {/* <HomeTask /> */}
        {/* <Contex /> */}
        {/* <UsememoPrac /> */}
        {/* <UseCallback /> */}
        {/* <UseReducer /> */}
        {/* <Formik /> */}
        {/* <Debouncing /> */}
        {/* <ExamPrepCrud /> */}
        <HomePage />

      </header>
  );
}
export default App;
