/* eslint-disable no-undef */
import ship from './ship';
// Represents an array for the board (We do need one for each player, don't forget)
const gameboard = [];
const gameboardFactory = () => {
    const createGameboard = () => {
        for (let i = 0; i < 100; i++) {
            gameboard.push(i)
        }
        return gameboard;
    }
    // Creates 5 ship objects and then assigns it to one object.
    const createShips = () => {
        const patrolboat = ship().createShip(2)
        const submarine = ship().createShip(3)
        const destroyer = ship().createShip(3)
        const battleship = ship().createShip(4)
        const carrier = ship().createShip(5)
        
        return {
            patrolboat: patrolboat,
            submarine: submarine, 
            destroyer: destroyer,
            battleship: battleship,
            carrier: carrier
        }
    }
    // Places the ships on the gameboard
    const placeShips = (ship, location, name) => {
        let newLocation = location;
        for (let i = newLocation; i < location + ship.Length; ++i) {
            gameboard.splice(i, 1, name)
        }
        return gameboard;
    }
    // Receives an attack and then plots the coordinates, and if a ship gets hit, it then registers that and runs hit().
    const receiveAttack = (location, player, computer) => {
        if (Number.isInteger(gameboard[location])) gameboard.splice(location, 1, player);
        else {
            if(gameboard[location] !== 'CH' || 'PH') ship().hit(gameboard[location], location, computer);
        }
        return gameboard;
    }

    return { gameboardFactory, createShips, createGameboard, placeShips, receiveAttack }
}

module.exports = gameboardFactory;
