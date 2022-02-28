import React from 'react';
import {Link} from 'react-router-dom';


const QuizContainer = ({playerOne, playerTwo}) => {
    
    return (
        <>
        <h1>This is the quiz page</h1>
        <h2> {playerOne} is player one </h2>
        <h2> {playerTwo} is player two </h2>
        <Link to = "/game">To game</Link>
        </>
    )
    
}

export default QuizContainer;