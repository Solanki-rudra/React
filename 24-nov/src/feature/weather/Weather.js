import React, { useEffect } from 'react'

function Weather() {
    const URL = ' https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=dbf8be554d166d69a05d6ae931254710'
    useEffect(() => {
        getDataFromApi()
    }, [])
    async function getDataFromApi() {
        try {
            let response = await fetch(URL)
            console.log(response)
        } catch (error) {
            alert(error)
        }
    }
    
  return (
    <div>
      <h1 className='bg-slate-500 text-red-900'>hi0</h1>
    </div>
  )
}

export default Weather