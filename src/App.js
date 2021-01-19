/* eslint-disable no-undef */
import  {React, useState}  from 'react';
import PlayGame from './components/PlayGame'
import gameboardFactory from './modules/gameboard';

function App() {
    const [computerShips, setComputerShips] = useState(gameboardFactory().createShips());
    const [playerShips, setPlayerShips] = useState(gameboardFactory().createShips());

    const computerGameBoard = []
    const playerGameBoard = []
    const [computerBoard, setComputerBoard] = useState(gameboardFactory().createGameboard(computerGameBoard));
    const [playerBoard, setPlayerBoard] = useState(gameboardFactory().createGameboard(playerGameBoard));

    return(
        <PlayGame playerShips={playerShips} computerShips={computerShips} computerBoard={computerBoard} playerBoard={playerBoard} setPlayerBoard={setPlayerBoard} setComputerBoard={setComputerBoard} setComputerShips={setComputerShips} setPlayerShips={setPlayerShips}/>
    )
}

export default App;
