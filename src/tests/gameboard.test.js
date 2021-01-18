const gameboardFactory = require('../modules/gameboard');

test('Creates a gameboard with 100 boxes', () => {
    expect(gameboardFactory().createGameboard()).toEqual(
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
        37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53,
        54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
        71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87,
         88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]
    )
})

test('Creates 5 ships in an object', () => {
    expect(gameboardFactory().createShips()).toEqual({
        patrolboat: {Length: 2, Hits: [], Destroyed: false},
        submarine: {Length: 3, Hits: [], Destroyed: false},
        destroyer: {Length: 3, Hits: [], Destroyed: false},
        battleship: {Length: 4, Hits: [], Destroyed: false},
        carrier: {Length: 5, Hits: [], Destroyed: false},
    })
})

test('Create ships and place choose where they go', () => {
    const computer = gameboardFactory().createShips();
    gameboardFactory().placeShips(computer.destroyer, 50, 'CD')

    expect(gameboardFactory().placeShips(computer.battleship, 20, 'CB')).toEqual(
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        'CB', 'CB', 'CB', 'CB', 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
        37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 'CD', 'CD', 'CD', 53,
        54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
        71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87,
        88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]
    )
})

test('Fire a missile on the board', () => {
    const computer = gameboardFactory().createShips();
    gameboardFactory().placeShips(computer.destroyer, 50, 'CD')
    gameboardFactory().placeShips(computer.battleship, 20, 'CB')

    expect(gameboardFactory().receiveAttack(43, 'CH')).toEqual(
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        'CB', 'CB', 'CB', 'CB', 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
        37, 38, 39, 40, 41, 42, 'CH', 44, 45, 46, 47, 48, 49, 'CD', 'CD', 'CD', 53,
        54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
        71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87,
        88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]
    )
})