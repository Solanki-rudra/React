import React,{useState,useEffect} from 'react'


// // mouse - events============================================================
// function AllEvents() {
//     let [count, setCount] = useState(0);
//     let [text, setText] = useState('A');
//     function adder() {
//         setCount(count+=1);
//     }
//     function texter() {
//         setText(text+='B')
//     }
//   return (
//     <div>
//         <p className="btn">{text}</p>
//       <button onClick={() => {alert('clicked')}} className="btn">Click</button>
//       <button onDoubleClick={() => {alert('Double-clicked')}} className="btn">Double-Click</button>
//       <button onMouseDown={texter} className="btn">onMouseDown</button>
//       <button onMouseUp={texter} className="btn">onMouseUp</button>
//       <button onMouseMove={adder} className="btn">onMouseMove {count}</button>
//     </div>
//   )
// }

// export default AllEvents


// key & form - events============================================================

//1
// function KeyboardEvents() {
//   function handleKeyUp  (event){
//     console.log(`Key up: ${event.key}`);
//   };

//   return <div onKeyUp={handleKeyUp} tabIndex='0'>Release a key</div>;
// }

// export default KeyboardEvents;


//2
// function KeyboardEvents() {
//   function handleKeyDown  (event){
//     console.log(`Key keyDown: ${event.key}`);
//   };

//   return <div onKeyDown={handleKeyDown} tabIndex='0'>press a key</div>;
// }

// export default KeyboardEvents;


//3
// function KeyboardEvents() {
//   const handleKeyPress = (event) => {
//     console.log(`Key pressed: ${event.key}`);
//   };

//   return <button className='btn' onKeyPress={handleKeyPress} >Type a key</button>;
// }

// export default KeyboardEvents;


//4
// function KeyboardEvents() {
//   const handleFocus = () => {
//     console.log('Element focused');
//   };

//   const handleBlur = () => {
//     console.log('Element blurred');
//   };

//   return (
//     <input className='btn'
//       type="text"
//       onFocus={handleFocus}
//       onBlur={handleBlur}
//       placeholder="Click here and type"
//     />
//   );
// }

// export default KeyboardEvents;


//5
// function InputExample() {
//   const [text, setText] = useState('');

//   const handleChange = (event) => {
//     setText(event.target.value);
//   };

//   return (
//     <div>
//       <input className="btn"
//         type="text"
//         value={text}
//         onChange={handleChange}
//         placeholder="Type something..."
//       />
//       <p>You typed: {text}</p>
//     </div>
//   );
// }

// export default InputExample;


//6
function TextareaExample() {
  const [selectedText, setSelectedText] = useState('');

  const handleSelect = (event) => {
    // console.log(event);
    const selected = event.target.value.substring(
      event.target.selectionStart,
      event.target.selectionEnd
    );
    setSelectedText(selected);
  };

  return (
    <div>
      <textarea
      className='btn'
        rows="4"
        cols="50"
        onSelect={handleSelect}
        placeholder="Select some text..."
      />
      <p>Selected Text: {selectedText}</p>
    </div>
  );
}

export default TextareaExample;

