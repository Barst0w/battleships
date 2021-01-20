/* eslint-disable no-undef */
import  {React, useEffect, useState}  from 'react';
import PlayGame from './components/PlayGame'
import gameboardFactory from './modules/gameboard';
import Interface from './components/Interface'
const ship = require('./modules/ship');

function App() {
    const [appState, setAppState] = useState()
    const [computerShips, setComputerShips] = useState(gameboardFactory().createShips());
    const [playerShips, setPlayerShips] = useState(gameboardFactory().createShips());
    const [playerBoard, setPlayerBoard] = useState([]);
    const [computerBoard, setComputerBoard] = useState([]);

    const logic = (input) => {
        const location = (input.target.attributes['datatype'].value);
        if (location.includes('C') || location.includes('P')) { 
            if (location !== 'CH' && 'PH') {
                ship().hit(location, playerShips, computerShips, setPlayerShips, setComputerShips, computerBoard, setComputerBoard, playerBoard, setPlayerBoard, checkWin);
            }
         }
        else {
            let newLocation = parseInt(location, 10);
            if (input.target.classList.contains('computerTile')) gameboardFactory().receiveAttack(newLocation, 'CH', computerBoard, setComputerBoard)
            if (input.target.classList.contains('playerTile')) gameboardFactory().receiveAttack(newLocation, 'PH', playerBoard, setPlayerBoard)
        }
    }

    const resetGame = () => {
        window.location.reload()
    }

    const checkWin = () => {
        const computerWinArr = [
        (computerShips.patrolboat.Destroyed),
        (computerShips.submarine.Destroyed),
        (computerShips.destroyer.Destroyed),
        (computerShips.battleship.Destroyed),
        (computerShips.carrier.Destroyed),
        ]

        const playerWinArr = [
        (playerShips.patrolboat.Destroyed),
        (playerShips.submarine.Destroyed),
        (playerShips.destroyer.Destroyed),
        (playerShips.battleship.Destroyed),
        (playerShips.carrier.Destroyed),
        ]

        if (!computerWinArr.includes(false)) { 
            alert('Player 1 Wins!');
        } else if (!playerWinArr.includes(false)) {
            alert('Player 2 Wins!');
        }
    }
    return(
        <div className="mainDiv">
            <p className="title">Battleships</p>
            <button className="resetBtn" onClick={resetGame}>Reset Game</button>
            <PlayGame setComputerBoard={setComputerBoard} setPlayBoard={setPlayerBoard} playerShips={playerShips} computerShips={computerShips} computerBoard={computerBoard} playerBoard={playerBoard} setPlayerBoard={setPlayerBoard} setComputerShips={setComputerShips} setPlayerShips={setPlayerShips}/>
            <Interface logic={logic} computerBoard={computerBoard} playerBoard={playerBoard} />
        </div>
    )
}

export default App;
