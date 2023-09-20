import React,{useEffect, useState, useRef} from 'react'

function Practice20sept() {
    useEffect(() => {
        console.log('run')
        return () => {
            console.log('clean')
        };
    }, []);

  return (
    <div>
    </div>   
  )
}

export default Practice20sept