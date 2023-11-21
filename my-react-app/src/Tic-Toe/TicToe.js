import React,{useState} from 'react'

function TicToe() {
    const [squareValues, setsquareValues] = useState(Array(9).fill(null));
    const [isXPlay, setIsXPlay] = useState(true);

    const winnerName = winner(squareValues)
    let status;
    if(winnerName){
        status = 'Winner is '+ winnerName
    }else{
        let isDraw = squareValues.some(itm=>!itm)
        status = !isDraw ? 'Match Draw!!' : 'Next Player - '+ (isXPlay ? 'X' : 'O')
    }

    function handleClick(index) {
        if(squareValues[index] || winner(squareValues)){
            return;
        }
        let updateValues = [...squareValues]
        isXPlay ? updateValues[index] = 'X' : updateValues[index] = 'O';
        setsquareValues(updateValues)
        setIsXPlay(pv=>!pv)
    }

  return (
    <div className='bg-gray-700 p-5 flex flex-col justify-center'>
        <h1 className='m-2'>{status}</h1>
        <div className='row flex justify-center'>
            <Square value={squareValues[0]} onsquareClick={()=>handleClick(0)}/>
            <Square value={squareValues[1]} onsquareClick={()=>handleClick(1)}/>
            <Square value={squareValues[2]} onsquareClick={()=>handleClick(2)}/>
        </div>
        <div className='row flex justify-center'>
            <Square value={squareValues[3]} onsquareClick={()=>handleClick(3)}/>
            <Square value={squareValues[4]} onsquareClick={()=>handleClick(4)}/>
            <Square value={squareValues[5]} onsquareClick={()=>handleClick(5)}/>
        </div>
        <div className='row flex justify-center'>
            <Square value={squareValues[6]} onsquareClick={()=>handleClick(6)}/>
            <Square value={squareValues[7]} onsquareClick={()=>handleClick(7)}/>
            <Square value={squareValues[8]} onsquareClick={()=>handleClick(8)}/>
        </div>
        <button onClick={()=>setsquareValues(Array(9).fill(null))} className="btn bg-gray-800 w-fit rounded p-1 mx-auto my-2">Reset</button>
    </div>
  )
}

export default TicToe


function Square({value,onsquareClick}) {
    return <div className='bg-white border-2 w-[50px] h-[50px] text-2xl text-black'>
             <button type="button" onClick={onsquareClick} className="btn  h-full w-full">
              {value}
             </button>
          </div>
}

function winner(squares) {
    let winLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    for(let i=0; i<winLines.length; i++){
        let [a,b,c] = winLines[i];
        if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c]){
            return squares[a]
        }
    }
    return null;
}