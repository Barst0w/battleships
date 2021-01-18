const ship = () => {

    const createShip = (length) => {
    const ship = {
        Length: length,
        Hits: [],
        Destroyed: false,
    }
    return ship;
}

    const hit = (name, location) => {
        name.Hits.push(location)
        isSunk();
    }

    const isSunk = () => {
        if (ship.Hits.length >= ship.Length) ship.Destroyed = true;
        return ship
    }
    
    return { createShip, hit, isSunk }
};

module.exports = ship;
