import React,{useState} from "react";
export default function Child(props){
    const [type, setType] = useState('');
    props.dataSend(type)
    return(
        <input type="text" onChange={(e) => {setType(e.target.value)}} />
    )
}