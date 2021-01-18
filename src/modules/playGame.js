import ship from './ship';
import gameboardFactory from './gameboard'

// EVEN THOUGH WE NEED TWO BOARDS, AND TWO SETS OF EVERYTHING, WE CAN DO THIS HERE BY JUST DUPLICATING IT, WE DON'T NEED TO REWRITE THE CODE, I DONT THINK ANYWAYS.

const startGame = () => {
    const computer = gameboardFactory().createShips();
    const player = gameboardFactory().createShips();
    const computerBoard = gameboardFactory().createGameboard();
    const playerBoard = gameboardFactory().createGameboard();
}