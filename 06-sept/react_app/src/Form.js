import React,{useState} from 'react'

function Form(props) {
    const [name, setName] = useState('');
    function handleData(e) {
        setName(e.target.value);
    }
    function submitData(e) {
        e.preventDefault();
        props.onSubmit(name)
    }
  return (
    <div>
        <form onSubmit={submitData}>
            <input type="text" value={name} onChange={handleData} />
            <input type="submit" value='Submit'/>
        </form>
    </div>
  )
}

export default Form
