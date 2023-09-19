import React,{useState,useEffect} from 'react'

function ReverseCounter() {
    const [count, setCount] = useState(60);
    const [showNotif, setShowNotif] = useState(false);
    useEffect(()=>{
        let timer;
        if (count === 0) {
            setShowNotif(true)
        } else {
             timer = setTimeout(()=>{
                setCount(pv => pv-1)
                // console.log(count)
            },100)
        }
        // console.log('Run')
        return () => {
            // console.log(count)
            clearTimeout(timer)
        }
    },[count])

  return (
    <div>
      <h1>{count}</h1>
      <div style={{display:showNotif?'block':'none'}} className='bg-white text-success p-4 rounded'>
        <h1>Timer is over</h1>
      </div>
    </div>
  )
}

export default ReverseCounter

