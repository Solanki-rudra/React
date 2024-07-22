import './App.css';
import FlipGame from './components/FlipGame.js'
import TicToe from './components/TicToe';
import SnakeGame from './components/snake_game/SnakeGame.js';

function App() {
  return (
    <div className="App grid grid-cols-2 h-screen justify-around bg-gray-700 p-5 text-white">
      <TicToe />
      <FlipGame />
      {/* <SnakeGame /> */}
    </div>
  );
}

export default App;
