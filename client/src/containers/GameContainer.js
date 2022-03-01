import React from 'react';
import {Link} from 'react-router-dom';


const GameContainer = ({playerOne, playerTwo}) => {
    
    return (
        <>
        <h1>This is the game page</h1>
        <h2> {playerOne} is player one </h2>
        <h3> This is the score counter</h3>
        <h4> This is direction selector</h4>
        <h2> {playerTwo} is player two </h2>
        <h3> This is the score counter</h3>
        <h4> This is direction selector</h4>
        <h1> This is the penalty</h1>
        <Link to = "/quiz">Next question</Link>
        </>
    )
    
}

export default GameContainer;