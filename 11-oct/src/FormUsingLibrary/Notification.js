import React, { useEffect,useState } from 'react'

function Notification({message, stayTimeInMs,show}) {
    const [forShow, setForShow] = useState(show);
    
    useEffect(() => {
        let timer;
        timer = setTimeout(()=>{
            setForShow(false)
        },stayTimeInMs)
        return () => {
            clearTimeout(timer)
        };
    }, []);
    const styling = {
        display: forShow ?'block':'none',
        position: 'fixed', 
        top: '5%',
        left: '50%', 
        transform: 'translate(-50%, -50%)', 
        backgroundColor: '#08937F',
        padding: '10px 20px',
        borderRadius: '10px',
        boxShadow:'0px 0px 20px 2px black'
    }
  return (
    <div style={styling} className='bg-success p-3 w-50 rounded'>
      <h3>{message}</h3>
    </div>
  )
}

export default Notification
