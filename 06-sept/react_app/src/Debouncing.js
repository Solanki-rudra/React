import React,{useState} from 'react'
// import SearchInput from './SearchInput';
import SearchInput from './ExamPrepCrud/SearchInput';

function Debouncing() {
    const arr = ['rudra','jhdjfh','Dhrieijh','ujheugs','chanu','bhaumik','prakhar','pujan','sachin','akash']
    const [searchedArr, setSearchedArr] = useState([]);
    let timer;
    const handleSearch =(value) =>{
        clearTimeout(timer)
        timer = setTimeout(() => {
            if(value.trim() !== ''){
                let searchArr= arr.filter((item)=>item.includes(value.trim()))
                console.log(searchArr)
                setSearchedArr(searchArr)
            }else{
                setSearchedArr([])
            }
        }, 500);
    }
  return (
    <div>
        <div className='w-fit text-start'>
            <input type="text" onKeyUp={(e)=>handleSearch(e.target.value)}/>
            <SearchInput searchedArr={searchedArr} />
        </div>
    </div>
  )
}

export default Debouncing
