/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import PlayGame from '../components/PlayGame';
const ship = require('../modules/ship');
// Represents an array for the board (We do need one for each player, don't forget)
const gameboardFactory = () => {
    const createGameboard = (name) => {
        for (let i = 0; i < 100; i++) {
            name.push(i)
        }
        return name;
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
    // Receives an attack and then plots the coordinates, and if a ship gets hit, it then registers that and runs hit().
    const receiveAttack = (location, player, gameboard, setGameboard) => {
        if (Number.isInteger(location)) { 
            gameboard.splice(location, 1, player);
            const newArr = [...gameboard]
            setGameboard(newArr);
        }
        return gameboard;
    }

    return { gameboardFactory, createShips, createGameboard, receiveAttack }
}

export default gameboardFactory;
