import React from 'react';
import "./../css/ScoreDisplay.css";

const ScoreDisplay = ({playerOne, playerTwo, questionNumber}) => {

    const currentPlayer = (questionNumber % 2 === 0) ? playerTwo.name : playerOne.name;

    const playerScore = (player) => {

        return (
            player.score.map((value, index) => {
                if(value === 'x'){
                    return <i id="shotNotTaken" className="far fa-circle" key = {index}/>
                } else if (value === 0) {
                    return <i id="shotNoPoint" className="fas fa-futbol" key = {index}/>
                } else {
                    return <i id="shotPointScore" className="fas fa-futbol" key = {index}/>
                }
            }) 
        )
    }

    return (
        <>
        <div className='playerScore'>
            {playerOne.name} {playerScore(playerOne)}
        </div>
        <div className='currentPlayer'>
        <h2>It is {currentPlayer}'s go</h2>
        </div>
        <div className='playerScore'>
            {playerTwo.name} {playerScore(playerTwo)}
        </div>
        </>
    )
}

export default ScoreDisplay;