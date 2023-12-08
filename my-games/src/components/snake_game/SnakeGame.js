import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startGame } from '../../slides/SnakeGameSlice';

function SnakeGame() {
  const dispatch = useDispatch();
  const snakeCellsArray = useSelector((state) => state.SnakeReducer.snakeCell);
  const [snakeTimer, setSnakeTimer] = useState(null);

  function handleStart() {
    let snake_cell_index = 1;
    if (snakeTimer) {
      clearInterval(snakeTimer);
    }
    const newSnakeTimer = setInterval(() => {
      dispatch(startGame(snake_cell_index));
      snake_cell_index += 1;
    }, 150);

    setSnakeTimer(newSnakeTimer);
  }

  return (
    <div>
      <h2>snake</h2>
      <div className="w-[600px] flex flex-wrap border">
        {snakeCellsArray.map((cell, index) => (
            <Cells key={index} snakeCell={snakeCellsArray[index]} />
          ))}
      </div>
      <div>
        <button
          onClick={handleStart}
          className="btn bg-red-600 m-2 rounded p-1 px-2"
        >
          start
        </button>
      </div>
    </div>
  );
}

export default SnakeGame;

function Cells({ snakeCell }) {
  return (
    <div
      className={`rounded w-[20px] h-[20px] ${snakeCell ? 'bg-green-600' : 'bg-black'}`}
    ></div>
  );
}
