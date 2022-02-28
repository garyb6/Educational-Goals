import React from 'react';
import {Link} from 'react-router-dom';


const GameContainer = ({playerOne, playerTwo}) => {
    
    return (
        <>
        <h1>This is the game page</h1>
        <h2> {playerOne} is player one </h2>
        <h2> {playerTwo} is player two </h2>
        <Link to = "/quiz">Back to Quiz</Link>
        </>
    )
    
}

export default GameContainer;