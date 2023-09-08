import React,{useState} from 'react'

function Row({funName, param, text, varName}) {

  return (
    <div>
        <button className="btn" onClick={() => funName(-param)}>-{text}</button>
        <span className='btn'>{varName}</span>
        <button className="btn" onClick={() => funName(param)}>+{text}</button>
    </div>
  )
}

export default Row

export function Row2 () {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
        <p className='btn'>name:{name} email:{email}</p>
      <input
      className='btn'
        type="text"
        placeholder="Name"
        onChange={handleNameChange}
      />
      <input
      className='btn'
        type="email"
        placeholder="Email"
        onChange={handleEmailChange}
      />
    </div>
  );
}

export function List () {
    const [arr, setArr] = useState([]);
    const [item, setItem] = useState('');

    const listAdder = () => {
        setArr([...arr, item])
    }
    return(
        <>
            <ul>
                {arr.map((val,ind) => 
                    (<li key={ind}>{val}</li>)
                )}
            </ul>
            <input className='btn' type="text" onChange={(e) => {setItem(e.target.value)}}/>
            <button className="btn" onClick={listAdder}>Add</button>
        </>
    )
}

export function Func(){
    const [name,setName] = useState('Pujan'); 
   function handleName(){
       setName('Prakhar');
       console.log(name);
   }
    return(
        <button onClick={handleName}>Click</button>
    )
}