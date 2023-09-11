import React,{useState} from 'react'
import Row,{Row2,List,Func} from './Row'

function Practice() {
    const [count, setCount] = useState(0);
    const [addTwo, setAddTwo] = useState(0);
    let addThree = 0;

    const adder = (num) => {
        setCount(count+num)
    }

    const two = (num) => {
        // setAddTwo(addTwo+num)
        // setAddTwo(addTwo+num)
        setAddTwo(preValue => preValue+num)
        setAddTwo(preValue => {
            return preValue+num
        })
    }

    const three = (num) => {
        addThree+=num
        console.log(addThree);
    }
  return (
    <>
        <div>
          <button className="btn" onClick={() => adder(-1)}>-</button>
          <span className='btn'>{count}</span>
          <button className="btn" onClick={() => adder(1)}>+</button>
        </div>
        <div>
          <button className="btn" onClick={() => two(-1)}>-2</button>
          <span className='btn'>{addTwo}</span>
          <button className="btn" onClick={() => two(1)}>+2</button>
        </div>    
        <div>
          <button className="btn" onClick={() => three(-3)}>-3</button>
          <span className='btn'>{addThree}</span>
          <button className="btn" onClick={() => three(+3)}>+3</button>
        </div>    
    <Row funName={three} param ={3} text='3' varName={addThree}/>
    <Row funName={two} param ={1} text='2' varName={addTwo}/>
    {/* <Row2 /> */}
    {/* <List /> */}
    {/* <Func /> */}
    </>
  )
}

export default Practice
