import React,{useState} from 'react'


function Value() {
    const [name, setName] = useState('');
  return (
    <div>
        <form action="#">
            <input type="text"  />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Value
