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
    const hit = (name, location, playerShips) => {
        let hitShip = '';

        if (name.startsWith('C')) {
            if (name === 'CP') hitShip = playerShips.patrolboat;
            if (name === 'CS') hitShip = playerShips.submarine;
            if (name === 'CD') hitShip = playerShips.destroyer;
            if (name === 'CB') hitShip = playerShips.battleship;
            if (name === 'CC') hitShip = playerShips.carrier;
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
