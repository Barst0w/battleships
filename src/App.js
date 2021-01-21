/* eslint-disable no-undef */
import  {React, useEffect, useState}  from 'react';
import PlayGame from './components/PlayGame'
import gameboardFactory from './modules/gameboard';
import Interface from './components/Interface'
const ship = require('./modules/ship');

function App() {
    let computerDestroyedArr = ['Destroyed Ships:']
    let playerDestroyedArr = ['Destroyed Ships:']
    const [computerDestroyedState, setComputerDestroyedState] = useState(computerDestroyedArr)
    const [playerDestroyedState, setPlayerDestroyedState] = useState(playerDestroyedArr)
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

        if ((computerWinArr[0] === true) && (!playerDestroyedArr.includes(computerShips.patrolboat))) {playerDestroyedArr.push(<br></br>, <br></br>, 'Patrolboat') && setPlayerDestroyedState(playerDestroyedArr)}
        if ((computerWinArr[1] === true) && (!playerDestroyedArr.includes(computerShips.submarine))) {playerDestroyedArr.push(<br></br>, <br></br>, 'Submarine') && setPlayerDestroyedState(playerDestroyedArr)}
        if ((computerWinArr[2] === true) && (!playerDestroyedArr.includes(computerShips.destroyer))) {playerDestroyedArr.push(<br></br>, <br></br>, 'Destroyer') && setPlayerDestroyedState(playerDestroyedArr)}
        if ((computerWinArr[3] === true) && (!playerDestroyedArr.includes(computerShips.battleship))) {playerDestroyedArr.push(<br></br>, <br></br>, 'Battleship') && setPlayerDestroyedState(playerDestroyedArr)}
        if ((computerWinArr[4] === true) && (!playerDestroyedArr.includes(computerShips.carrier))) {playerDestroyedArr.push(<br></br>, <br></br>, 'Carrier') && setPlayerDestroyedState(playerDestroyedArr)}

        if ((playerWinArr[0] === true) && (!computerDestroyedArr.includes(playerShips.patrolboat))) {computerDestroyedArr.push(<br></br>, <br></br>, 'Patrolboat') && setComputerDestroyedState(computerDestroyedArr)}
        if ((playerWinArr[1] === true) && (!computerDestroyedArr.includes(playerShips.submarine))) {computerDestroyedArr.push(<br></br>, <br></br>,'Submarine') && setComputerDestroyedState(computerDestroyedArr)}
        if ((playerWinArr[2] === true) && (!computerDestroyedArr.includes(playerShips.destroyer))) {computerDestroyedArr.push(<br></br>, <br></br>, 'Destroyer') && setComputerDestroyedState(computerDestroyedArr)}
        if ((playerWinArr[3] === true) && (!computerDestroyedArr.includes(playerShips.battleship))) {computerDestroyedArr.push(<br></br>, <br></br>, 'Battleship') && setComputerDestroyedState(computerDestroyedArr)}
        if ((playerWinArr[4] === true) && (!computerDestroyedArr.includes(playerShips.carrier))) {computerDestroyedArr.push(<br></br>, <br></br>, 'Carrier') && setComputerDestroyedState(computerDestroyedArr)}
                
        if (!computerWinArr.includes(false)) { 
            alert('Player 2 Wins!');
            resetGame()
        } else if (!playerWinArr.includes(false)) {
            alert('Player 1 Wins!');
            resetGame()
        }
    }
    return(
        <div className="mainDiv">
            <p className="title">Battleships</p>
            <button className="resetBtn" onClick={resetGame}>Reset Game</button>
            <PlayGame setComputerBoard={setComputerBoard} setPlayBoard={setPlayerBoard} playerShips={playerShips} computerShips={computerShips} computerBoard={computerBoard} playerBoard={playerBoard} setPlayerBoard={setPlayerBoard} setComputerShips={setComputerShips} setPlayerShips={setPlayerShips}/>
            <Interface logic={logic} computerBoard={computerBoard} playerBoard={playerBoard} />
            <div className="computerDestroyedList">{computerDestroyedState}</div>
            <div className="playerDestroyedList">{playerDestroyedState}</div>
        </div>
    )
}

export default App;
