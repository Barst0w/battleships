import React from 'react';

const Interface = (props) => {
    let computerTileArr = [];
    props.computerBoard.forEach(element => {
        if (Number.isInteger(element)) computerTileArr.push(<div className="computerTile">{element}</div>)
        else if (element.startsWith('C')) computerTileArr.push(<div className="computerShipTile">{element}</div>)
    });

    let playerTileArr = [];
    props.playerBoard.forEach(element => {
        if (Number.isInteger(element)) playerTileArr.push(<div className="playerTile">{element}</div>)
        else if (element.startsWith('P')) playerTileArr.push(<div className="playerShipTile">{element}</div>)
    });
    return(
        <div className="display">
            <div className="computerUI">
                {computerTileArr}
            </div>
            <div className="playerUI">
                {playerTileArr}
            </div>
        </div>
    )
}

export default Interface;