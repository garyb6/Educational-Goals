import React from 'react';
import {Link} from 'react-router-dom';


const QuizContainer = ({playerOne, playerTwo}) => {
    
    return (
        <>
        <h1>This is the quiz page</h1>
        <h2> {playerOne} is player one </h2>
        <h3> This is the score counter</h3>
        <h2> {playerTwo} is player two </h2>
        <h3> This is the score counter</h3>
        <h2> This is the question </h2>
        <Link to = "/game">Answer 1</Link>
        <Link to = "/game">Answer 2</Link>
        <Link to = "/game">Answer 3</Link>
        <Link to = "/game">Answer 4</Link>
        </>
    )
    
}

export default QuizContainer;