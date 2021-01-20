/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react'
import gameboardFactory from '../modules/gameboard';

const PlayGame = (props) => {
    let computerStateArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
        37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53,
        54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
        71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87,
        88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99];

         let playerStateArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
        37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53,
        54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
        71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87,
         88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99];

    const placeShips = (arrName, ship, location, name) => {
        let newLocation = location;
        for (let i = newLocation; i < location + ship.Length; ++i) {
            arrName.splice(i, 1, name + i)
        }
    }

    const computerFunc = () => {
        let computerArr = [];
        for (let i = 0; i < 5; ++i) {
            let randomNum = Math.floor(Math.random() * 95);
            let overflow = Math.floor((randomNum / 1) % 10);
            let numTest = (value) => value < randomNum - 5 || value > randomNum + 5;
            if (overflow > 5) {--i}
            else if (!computerArr) computerArr.push(randomNum);
            else if (computerArr.every(numTest)) computerArr.push(randomNum);
            else {--i}
        }
        placeShips(computerStateArr, props.computerShips.patrolboat, computerArr[0], 'CP');
        placeShips(computerStateArr, props.computerShips.submarine, computerArr[1], 'CS');
        placeShips(computerStateArr, props.computerShips.destroyer, computerArr[2], 'CD');
        placeShips(computerStateArr, props.computerShips.battleship, computerArr[3], 'CB');
        placeShips(computerStateArr, props.computerShips.carrier, computerArr[4], 'CC');
    }
    computerFunc()

    const playerFunc = () => {
        let playerArr = [];
        for (let i = 0; i < 5; ++i) {
            let randomNum = Math.floor(Math.random() * 95);
            let overflow = Math.floor((randomNum / 1) % 10);
            let numTest = (value) => value < randomNum - 5 || value > randomNum + 5;
            if (overflow > 5) {--i}
            else if (!playerArr) playerArr.push(randomNum);
            else if (playerArr.every(numTest)) playerArr.push(randomNum);
            else {--i}
        }
        placeShips(playerStateArr, props.playerShips.patrolboat, playerArr[0], 'PP');
        placeShips(playerStateArr, props.playerShips.submarine, playerArr[1], 'PS');
        placeShips(playerStateArr, props.playerShips.destroyer, playerArr[2], 'PD');
        placeShips(playerStateArr, props.playerShips.battleship, playerArr[3], 'PB');
        placeShips(playerStateArr, props.playerShips.carrier, playerArr[4], 'PC');
    } 
    playerFunc()

    useEffect(() => {
        props.setComputerBoard(computerStateArr);
        props.setPlayerBoard(playerStateArr)
    }, [PlayGame])

    return(
        <div></div>
    )
}

export default PlayGame;



