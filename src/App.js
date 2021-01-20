/* eslint-disable no-undef */
import  {React, useEffect, useState}  from 'react';
import PlayGame from './components/PlayGame'
import gameboardFactory from './modules/gameboard';
import Interface from './components/Interface'
// MAKE SURE THAT THE ARRAY AND OTHER FUNCTIONS ARE LOOKING FOR INTEGER, AND NOT A STRING, IF NOT, REMOVE THE PARSE INT AND KEEP IT AS A STRING.
function App() {
    const [computerShips, setComputerShips] = useState(gameboardFactory().createShips());
    const [playerShips, setPlayerShips] = useState(gameboardFactory().createShips());
    const [computerBoard, setComputerBoard] = useState([]);
    const [playerBoard, setPlayerBoard] = useState([]);

    const logic = (input) => {
        const location = (input.target.attributes['datatype'].value);
        if (location.includes('C')) { 
            let newLocation = location;
            gameboardFactory().receiveAttack(newLocation, 'CH', computerBoard, setComputerBoard)
         }
        else {
            let newLocation = parseInt(location, 10)
            console.log(newLocation)
            gameboardFactory().receiveAttack(newLocation, 'CH', computerBoard, setComputerBoard)
        }
    }

    useEffect(() => {
        console.log(computerBoard)
    }, [computerBoard])

    return(
        <div>
            <PlayGame setComputerBoard={setComputerBoard} setPlayBoard={setPlayerBoard} playerShips={playerShips} computerShips={computerShips} computerBoard={computerBoard} playerBoard={playerBoard} setPlayerBoard={setPlayerBoard} setComputerBoard={setComputerBoard} setComputerShips={setComputerShips} setPlayerShips={setPlayerShips}/>
            <Interface logic={logic} computerBoard={computerBoard} playerBoard={playerBoard} />
        </div>
    )
}

export default App;

