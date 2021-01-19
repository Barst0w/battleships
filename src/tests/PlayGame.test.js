const PlayGame = require('../components/PlayGame');
const gameboardFactory = require('../modules/gameboard');

test('Test', () => {
    PlayGame().startGame()

    expect(PlayGame().placeShipsRandom()).toEqual([])
})