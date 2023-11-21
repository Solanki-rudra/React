import React,{useState} from 'react'

function Cursor() {
    const [position, setPosition] = useState({x:0, y:0});
    const style = {
        left:position.x,
        top:position.y,
    }
  return (
    <div className='h-[100vh] w-[100vw]' onMouseMove={(e)=>{setPosition({x:e.pageX,y:e.pageY})}}>
        <div className='bg-red-600 h-[4px] w-[4px] rounded fixed z-50' style={{...style}}></div>
        <div className='bg-blue-600 h-[11px] w-[11px] rounded fixed z-50' style={{...style,transition:'0.05s',transform:'translate(5%,5%)'}}></div>
        <div className='bg-yellow-600 h-[4px] w-[4px] rounded fixed z-50' style={{...style,transition:'0.07s',transform:'translate(8px,8px)'}}></div>
        <div className='bg-yellow-600 h-[4px] w-[4px] rounded fixed z-50' style={{...style,transition:'0.1s',transform:'translate(9px,9px)'}}></div>
    </div>
  )
}

export default Cursor
