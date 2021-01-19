/* eslint-disable no-undef */
import  {React, useEffect, useState}  from 'react';
import PlayGame from './components/PlayGame'
import gameboardFactory from './modules/gameboard';
import Interface from './components/Interface'
// YOU CAN'T CHANGE STATE VIA PROPS. THAT'S WHY YOU'RE PROGRAM IS DOING THE WRONG NUMBERS, NEED TO UPDATE THE STATE THAT EXISTS IN PLAYGAME INTO APP
function App() {
    const [computerShips, setComputerShips] = useState(gameboardFactory().createShips());
    const [playerShips, setPlayerShips] = useState(gameboardFactory().createShips());

    const computerGameBoard = []
    const playerGameBoard = []
    const [computerBoard, setComputerBoard] = useState(gameboardFactory().createGameboard(computerGameBoard));
    const [playerBoard, setPlayerBoard] = useState(gameboardFactory().createGameboard(playerGameBoard));
    
    const computerBoardState = (state) => {
        setComputerBoard(state)
    }

    useEffect(() => {
        console.log(computerBoard)
    }, [computerBoard])

    return(
        <div>
            <PlayGame computerBoardState={computerBoardState} playerShips={playerShips} computerShips={computerShips} computerBoard={computerBoard} playerBoard={playerBoard} setPlayerBoard={setPlayerBoard} setComputerBoard={setComputerBoard} setComputerShips={setComputerShips} setPlayerShips={setPlayerShips}/>
            <Interface computerBoard={computerBoard} playerBoard={playerBoard} />
        </div>
    )
}

export default App;
