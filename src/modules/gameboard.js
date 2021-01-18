/* eslint-disable no-undef */
import ship from './ship';

const gameboard = [];
const gameboardFactory = () => {
    const createGameboard = () => {
        for (let i = 0; i < 100; i++) {
            gameboard.push(i)
        }
        return gameboard;
    }

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

    const placeShips = (ship, location, name) => {
        let newLocation = location;
        for (let i = newLocation; i < location + ship.Length; ++i) {
            gameboard.splice(i, 1, name)
        }
        return gameboard;
    }

    const receiveAttack = (location, player) => {
        if (Number.isInteger(gameboard[location])) gameboard.splice(location, 1, player);
        else {
            if(gameboard[location] !== 'CH' || 'PH') ship().hit(location, location);
        }
        return gameboard;
    }

    return { gameboardFactory, createShips, createGameboard, placeShips, receiveAttack }
}

module.exports = gameboardFactory;
