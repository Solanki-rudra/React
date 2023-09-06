import React,{useState} from 'react'

function Events() {
    const [bgc, setBgc] = useState('blueviolet');
    const [msg, setMsg] = useState('Touch me 😥');
    function bgChanger() {
        setBgc('rgb(142, 13, 13)')
        setMsg('chhorna nai! 😮')
    }
    function bgSetter() {
        setBgc('green')
        setMsg('pakad mereko! 😡')
    }
  return (
    <div>
      <button style={{backgroundColor : bgc}} onMouseOver={bgChanger} onMouseLeave={bgSetter} className="btn">{msg}</button>
    </div>
  )
}

export default Events
