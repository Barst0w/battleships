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
    const hit = (name, location, playerShips, computerShips) => {
        let hitShip = '';

        if (name.startsWith('C')) {
            if (name === 'CP') hitShip = computerShips.patrolboat;
            if (name === 'CS') hitShip = computerShips.submarine;
            if (name === 'CD') hitShip = computerShips.destroyer;
            if (name === 'CB') hitShip = computerShips.battleship;
            if (name === 'CC') hitShip = computerShips.carrier;
        } 
        if (name.startsWith('P')) {
            if (name === 'PP') hitShip = playerShips.patrolboat;
            if (name === 'PS') hitShip = playerShips.submarine;
            if (name === 'PD') hitShip = playerShips.destroyer;
            if (name === 'PB') hitShip = playerShips.battleship;
            if (name === 'PC') hitShip = playerShips.carrier;
        }
        hitShip.Hits.push(location)
        isSunk(hitShip);
    }
    // Checks if all the spaces have been hit on a ship and then sets the object key destroyed to true.
    const isSunk = (name) => {
        if (name.Hits.length >= name.Length) name.Destroyed = true;
        return name;
    }
    
    return { createShip, hit, isSunk }
};

module.exports = ship;
