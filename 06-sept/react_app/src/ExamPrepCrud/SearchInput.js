import React from 'react'

function SearchInput({searchedArr}) {
  return (
    <div>
      <ul className='bg-white p-0 rounded'>
        {searchedArr.map((item,index)=>(
            <li className='border rounded text-start p-1 pl-2 border-b-2 border-pink' key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default SearchInput
