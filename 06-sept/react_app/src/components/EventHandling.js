import React,{useState} from 'react'

// 1=====================================================


// function EventHandling() {
//     let [count, setCount] = useState(0);
//     // function adder(n) {
//     //     setCount(count+=n);
//     // }
//     const adder = (n) => () => {
//         setCount(count+=n);
//     }
//   return (
//     <div>
//         <button className="btn">Count is == {count}</button>
//         <button className="btn" onClick={adder(1)}>Add 1</button>
//         <button className="btn" onClick={adder(5)}>Add 5</button>
//         <button className="btn" onClick={adder(10)}>Add 10</button>
//     </div>
//   )
// }

// export default EventHandling


// 2=====================================================


// function EventHandling() {
//   const [message, setMessage] = useState('');

//   const handleButtonClick = (text) => {
//     setMessage(`Button clicked with: ${text}`);
//   };

//   return (
//     <div>
//       <p className="btn">{message}</p>
//       <button className="btn" onClick={() => handleButtonClick('Button 1')}>Button 1</button>
//       <button className="btn" onClick={() => handleButtonClick('Button 2')}>Button 2</button>
//     </div>
//   );
// }

// export default EventHandling;

// 3=====================================================

function EventHandling() {
  const [selected, setSelected] = useState(null);
  const options = ['Option 1', 'Option 2', 'Option 3'];

  function handleOptionClick(index){
    setSelected(options[index]);
  };

  return (
    <div>
      <p className='btn'>Selected: {selected}</p>
      <ul>
        {options.map((option, index) => (
          <li className='btn' key={index} onClick={() => handleOptionClick(index)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventHandling;


