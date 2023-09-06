// import Form from './Form';
// import Conditional from './components/Conditional.js';
// import Mybuttons from './components/Mybuttons';
// import TeaSet from './components/Try.js';
import './App.css'
// import Event from './Events.js'
// import EventHandling from './components/EventHandling'
// import AllEvents from './components/AllEvents'
import DataFetch from './components/PractiseHooks'

function App() {
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
        <DataFetch />
      </header>
  );
}
export default App;
