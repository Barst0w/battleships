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
    const hit = (name, location, computer) => {
        let hitShip = '';

        if (name.startsWith('C')) {
            if (name === 'CP') hitShip = computer.patrolboat;
            if (name === 'CS') hitShip = computer.submarine;
            if (name === 'CD') hitShip = computer.destroyer;
            if (name === 'CB') hitShip = computer.battleship;
            if (name === 'CC') hitShip = computer.carrier;
        } 
        if (name.startsWith('P')) {
            if (name === 'PP') hitShip = player.patrolboat;
            if (name === 'PS') hitShip = player.submarine;
            if (name === 'PD') hitShip = player.destroyer;
            if (name === 'PB') hitShip = player.battleship;
            if (name === 'PC') hitShip = player.carrier;
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
