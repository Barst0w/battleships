import React from 'react';

const Interface = (props) => {
    let computerTileArr = [];
    props.computerBoard.forEach(element => {
        if (Number.isInteger(element)) computerTileArr.push(<div className="computerTile" onClick={props.logic} datatype={element}></div>)
        else if (element.startsWith('C') && !element.includes('H')) computerTileArr.push(<div className="computerShipTile" onClick={props.logic} datatype={element}></div>)
        else if (element === 'CH') computerTileArr.push(<div className="computerHitTile" onClick={props.logic} datatype={element}></div>)
        else if (element.includes('C' && 'X')) computerTileArr.push(<div className="computerShipHit" onClick={props.logic} datatype={element}></div>)
    });

    let playerTileArr = [];
    props.playerBoard.forEach(element => {
        if (Number.isInteger(element)) playerTileArr.push(<div className="playerTile" onClick={props.logic} datatype={element}></div>)
        else if (element.startsWith('P') && !element.includes('H')) playerTileArr.push(<div className="playerShipTile" onClick={props.logic} datatype={element}></div>)
        else if (element === 'PH') playerTileArr.push(<div className="playerHitTile" onClick={props.logic} datatype={element}></div>)
        else if (element.includes('P' && 'X')) playerTileArr.push(<div className="playerShipHit" onClick={props.logic} datatype={element}></div>)
    });

    return(
        <div className="display">
            <p className="computerTitle">Player 1</p>
            <div className="computerUI">
                {computerTileArr}
            </div>
            <p className="playerTitle">Player 2</p>
            <div className="playerUI">
                {playerTileArr}
            </div>
        </div>
    )
}

export default Interface;