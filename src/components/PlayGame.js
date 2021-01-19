/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react'
import gameboardFactory from '../modules/gameboard';

const PlayGame = (props) => {
    const placeShips = (boardName, ship, location, name) => {
        let newLocation = location;
        for (let i = newLocation; i < location + ship.Length; ++i) {
            boardName.splice(i, 1, name)
        }
    }

    const computerFunc = () => {
        let computerArr = [];
        for (let i = 0; i < 5; ++i) {
            let randomNum = Math.floor(Math.random() * 95);
            let numTest = (value) => value < randomNum - 5 || value > randomNum + 5;
            if (!computerArr) computerArr.push(randomNum);
            else if (computerArr.every(numTest)) computerArr.push(randomNum);
            else {--i}
        }
        placeShips(props.computerBoard, props.computerShips.patrolboat, computerArr[0], 'CP');
        placeShips(props.computerBoard, props.computerShips.submarine, computerArr[1], 'CS');
        placeShips(props.computerBoard, props.computerShips.destroyer, computerArr[2], 'CD');
        placeShips(props.computerBoard, props.computerShips.battleship, computerArr[3], 'CB');
        placeShips(props.computerBoard, props.computerShips.carrier, computerArr[4], 'CC');
    }
    computerFunc()
    const playerFunc = () => {
        let playerArr = [];
        for (let i = 0; i < 5; ++i) {
            let randomNum = Math.floor(Math.random() * 95);
            let numTest = (value) => value < randomNum - 5 || value > randomNum + 5;
            if (!playerArr) playerArr.push(randomNum);
            else if (playerArr.every(numTest)) playerArr.push(randomNum);
            else {--i}
        }
        placeShips(props.playerBoard, props.playerShips.patrolboat, playerArr[0], 'PP');
        placeShips(props.playerBoard, props.playerShips.submarine, playerArr[1], 'PS');
        placeShips(props.playerBoard, props.playerShips.destroyer, playerArr[2], 'PD');
        placeShips(props.playerBoard, props.playerShips.battleship, playerArr[3], 'PB');
        placeShips(props.playerBoard, props.playerShips.carrier, playerArr[4], 'PC');
    } 
    playerFunc()
    return(
        <div>Hi</div>
    )
}

export default PlayGame;



