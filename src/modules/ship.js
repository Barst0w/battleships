const ship = () => {

    const createShip = (length) => {
    const ship = {
        Length: length,
        Hits: [],
        Destroyed: false,
    }
    return ship;
}
    // Registers a hit, updates the relevant ship object's hit key.
    const hit = (name, playerShips, computerShips, setPlayerShips, setComputerShips, computerBoard, setComputerBoard, playerBoard, setPlayerBoard, checkWin, setPlayerTurn) => {
        let hitShip = '';
        let shipTeam = '';

        if (name.startsWith('C')) {
            shipTeam = {...computerShips}
            if (name.startsWith('CP')) hitShip = computerShips.patrolboat;
            if (name.startsWith('CS')) hitShip = computerShips.submarine;
            if (name.startsWith('CD')) hitShip = computerShips.destroyer;
            if (name.startsWith('CB')) hitShip = computerShips.battleship;
            if (name.startsWith('CC')) hitShip = computerShips.carrier;
        } 
        if (name.startsWith('P')) {
            shipTeam = {...playerShips}
            if (name.startsWith('PP')) hitShip = playerShips.patrolboat;
            if (name.startsWith('PS')) hitShip = playerShips.submarine;
            if (name.startsWith('PD')) hitShip = playerShips.destroyer;
            if (name.startsWith('PB')) hitShip = playerShips.battleship;
            if (name.startsWith('PC')) hitShip = playerShips.carrier;
        }
        hitShip.Hits.push('Hit')
        if (name.startsWith('C')) { setComputerShips(shipTeam) }
        if (name.startsWith('P')) { setPlayerShips(shipTeam) }

        let newLocation;

        if(name.length === 4) {
            let location = name.slice(-2)
            newLocation = parseInt(location)
        } else {
            let location = name.slice(-1)
            newLocation = parseInt(location)
        }

        if (name.startsWith('C')) { 
            computerBoard.splice(newLocation, 1, 'X');
            const newArr = [...computerBoard]
            setComputerBoard(newArr);
        }

        if (name.startsWith('P')) {
            playerBoard.splice(newLocation, 1, 'X');
            const newArr = [...playerBoard]
            setPlayerBoard(newArr);
        }
        
        isSunk(hitShip);
        checkWin()
    }

    // Checks if all the spaces have been hit on a ship and then sets the object key destroyed to true.
    const isSunk = (name) => {
        if (name.Hits.length >= name.Length) name.Destroyed = true;
    }
    
    return { createShip, hit, isSunk }
};

module.exports = ship;
