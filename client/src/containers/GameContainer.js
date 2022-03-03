import React from 'react';
import { Link } from 'react-router-dom';
import Game from '../components/Game';


const GameContainer = ({ playerOne, playerTwo, setPlayerOne, setPlayerTwo, questionNumber }) => {

    return (
        <>
            <h1>This is the game page</h1>
            <h2> {playerOne.name} is player one </h2>
            <h3> This is the score counter</h3>
            <h4> This is direction selector</h4>
            <h2> {playerTwo.name} is player two </h2>
            <h3> This is the score counter</h3>
            <h4> This is direction selector</h4>
            <h1> This is the penalty</h1>
            <Game playerOne={playerOne} playerTwo={playerTwo} setPlayerOne={setPlayerOne} setPlayerTwo={setPlayerTwo} questionNumber={questionNumber} />
            <Link to="/quiz">Next question</Link>
        </>
    )

}

export default GameContainer;